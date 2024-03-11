import { Chat } from '@/components';
import CodeEditor from '@/components/IDE/CodeEditor/CodeEditor';
import useRoomStore from '@/store/Room';

export default function ProfilePage() {
  const {
    roomData: { roomShortUuid },
  } = useRoomStore();
  return (
    <>
      <div
        style={{
          height: '30rem',
          width: '30rem',
        }}
      >
        <CodeEditor
        // roomId={roomShortUuid}
        // height="30rem"
        // width="30rem"
        />
      </div>
      <Chat height="20rem" />
    </>
  );
}
