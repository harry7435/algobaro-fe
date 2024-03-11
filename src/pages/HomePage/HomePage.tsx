import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useMessageStore from '@/store/MessageStore';
import { AccessType, LanguagesType, RoomStatusType } from '@/types/room';

export default function HomePage() {
  const DUMMY_ROOM_DATA = {
    roomId: 1,
    roomStatus: 'RECRUITING' as RoomStatusType,
    title: '같이 푸실분~',
    languages: ['JAVA', 'C++'] as LanguagesType[],
    roomAccessType: 'PUBLIC' as AccessType,
    problemPlatform: 'BOJ',
    roomLimit: 4,
    tags: ['BFS', 'Level 1'],
    timeLimit: 20,
    roomShortUuid: '2ad2e9db',
    currentMemberCount: 0,
  };
  const navigate = useNavigate();
  const { disconnect, connected, currentRoomId, roomIndices, setMessageValue } =
    useMessageStore();

  useEffect(() => {
    setMessageValue({
      roomIndices: [DUMMY_ROOM_DATA],
    });
  }, []);

  const handleClickEnterRoom = async (roomShortUuid: string) => {
    if (connected) {
      await disconnect();
    }

    // Todo: 해당 url을 `room/${roomShortUuid}` 로 수정해야 함.
    navigate(`/profile/${roomShortUuid}`);
  };

  // disconnect가 asynchronous function이므로, 비동기적으로 처리를 해줘야 함.
  const handleClickQuitRoom = async () => {
    await disconnect();
  };

  return (
    <>
      <ul>
        {roomIndices.map(data => (
          <li key={data.roomShortUuid}>
            <button
              type="button"
              disabled={data.roomShortUuid === currentRoomId}
              onClick={() => handleClickEnterRoom(data.roomShortUuid)}
            >
              입장하기 -&gt; {data.roomShortUuid}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        disabled={!connected}
        onClick={() => handleClickQuitRoom()}
      >
        Disconnect
      </button>
    </>
  );
}
