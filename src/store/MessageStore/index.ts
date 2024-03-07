import * as Stomp from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { chatType } from '@/constants/chat';
import { LOCAL_ACCESSTOKEN } from '@/constants/localStorageKey';
import { PATH } from '@/routes/path';
import { sendMessageService } from '@/services/Message/sendMessageService';
import { ChatValueUnion } from '@/types/chat';
import { ukToKoreaTime } from '@/utils/convertDate';

import { MessageStoreState, MessageStoreValue } from './type';

const initialValue: MessageStoreValue = {
  listeners: new Set<Function>(),
  userId: '',
  client: new Stomp.Client(),
  connected: false,
  roomIndices: [111, 222, 333],
  currentRoomId: 0,
  messageEntered: '',
  messageLogs: [],
  subscription: null,
};

const useMessageStore = create<MessageStoreState>()(
  devtools((set, get) => ({
    ...initialValue,
    connect: roomId => {
      const BASE_SOCKET_URL = import.meta.env.VITE_BASE_SOCKET_URL;
      const socket = new SockJS(BASE_SOCKET_URL);
      const stompClient = new Stomp.Client({
        webSocketFactory: () => socket,
        debug: str => {
          console.log('stompClient debug string : ', str);
        },
        connectHeaders: {
          Authorization: `Bearer ${localStorage.getItem(LOCAL_ACCESSTOKEN)}`,
        },
      });

      stompClient.onConnect = () => {
        const { subscribeMessageBroker, publish } = get();
        set({ client: stompClient, currentRoomId: roomId });
        subscribeMessageBroker(roomId);
        set({ connected: true });
        publish();
      };
      stompClient.activate();
    },
    subscribeMessageBroker: roomId => {
      const client = get().client;
      if (!client) return;

      const subscription = client.subscribe(
        `${PATH.SUBPREFIX}/chat/room/${roomId}`,
        messageReceived => get().receiveMessage(messageReceived),
        {
          Authorization: `Bearer ${localStorage.getItem(LOCAL_ACCESSTOKEN)}`,
        }
      );

      set({ subscription });
      get().sendMessage(chatType.ENTER);
    },
    disconnect: () => {
      const { client, subscription, sendMessage, publish } = get();
      sendMessage(chatType.QUIT);

      subscription?.unsubscribe();
      client.deactivate();

      set({
        connected: false,
        currentRoomId: 0,
        messageEntered: '',
        messageLogs: [],
      });

      publish();
    },
    changeInput: value => {
      set({ messageEntered: value });
      get().publish();
    },
    sendMessage: (type: ChatValueUnion) => {
      const { client, currentRoomId, userId, messageEntered, publish } = get();
      const message = type === chatType.MESSAGE ? messageEntered : '';

      sendMessageService({
        client,
        type,
        messageToSend: {
          roomId: currentRoomId,
          userId: userId,
          message,
        },
      });

      set({ messageEntered: '' });
      publish();
    },
    receiveMessage: messageReceived => {
      const { formatMessage, publish } = get();
      const message = JSON.parse(messageReceived.body);
      set(state => ({
        messageLogs: [...state.messageLogs, formatMessage(message)],
      }));
      publish();
    },
    formatMessage: message => {
      const { type, userId, id, value, timestamp } = message;
      const formattedTime = ukToKoreaTime(timestamp);

      switch (type) {
        case chatType.ENTER:
          return {
            id,
            userId,
            value: `${userId}님이 입장하였습니다`,
            timestamp: formattedTime,
          };
        case chatType.QUIT:
          return {
            id,
            userId,
            value: `${userId}님이 퇴장하였습니다.`,
            timestamp: formattedTime,
          };
        case chatType.MESSAGE:
          return {
            id,
            userId,
            value: `${value}`,
            timestamp: formattedTime,
          };
        default:
          return {
            id,
            userId,
            value: 'Unknown Type Message',
            timestamp: formattedTime,
          };
      }
    },
    subscribe: listener => {
      set(state => ({ listeners: new Set([...state.listeners, listener]) }));
    },
    unSubscribe: listener => {
      set(state => ({
        listeners: new Set([...state.listeners].filter(li => li !== listener)),
      }));
    },
    publish() {
      get().listeners.forEach(listener => listener());
    },
    setMessageValue: (newValue: Partial<MessageStoreValue>) =>
      set(state => ({
        ...state,
        ...newValue,
      })),
  }))
);

export default useMessageStore;