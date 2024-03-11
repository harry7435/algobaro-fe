import * as Stomp from '@stomp/stompjs';

import { ChatValueUnion, RoomValueUnion } from '@/types/chat';
import { RoomType } from '@/types/me';

export interface Message {
  memberId: number;
  type: string;
  value: string | null;
  timestamp: string;
}

export interface MessageStoreValue {
  listeners: Set<Function>;
  userId: string;
  client: Stomp.Client;
  roomIndices: RoomType[];
  connected: boolean;
  currentRoomId: string;
  messageEntered: string;
  messageLogs: Message[];
  subscription: Stomp.StompSubscription | null;
}
export interface MessageStoreState extends MessageStoreValue {
  connect: (roomShortUuid: string) => void;
  subscribeMessageBroker: (roomShortUuid: string) => void;
  disconnect: () => void;
  changeInput: (value: string) => void;
  sendMessage: (type: ChatValueUnion | RoomValueUnion) => void;
  subscribe: (listener: Function) => void;
  unsubscribe: (listener: Function) => void;
  receiveMessage: (messageReceived: { body: string }) => void;
  formatMessage: (message: Message) => Message;
  publish: () => void;
  setMessageValue: (newValue: Partial<MessageStoreValue>) => void;
}
