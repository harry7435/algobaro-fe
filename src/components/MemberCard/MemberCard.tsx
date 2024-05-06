import { MoreVertRounded } from '@mui/icons-material';

import { Audio, Icon, Menu } from '@/components';
import { Avatar } from '@/components/Common/Avatar';
import { MENU_TEXT, MenuListProps } from '@/components/Common/Menu/MenuText';
import { ROOM_ROLE } from '@/pages/RoomPage/RoomPage.consts';
import { RoleType, RoomMemberType } from '@/types/room';

import * as S from './MemberCard.style';
import StatusTag from './StatusTag';

interface MemberProps
  extends Partial<
    Pick<RoomMemberType, 'nickname' | 'profileImage' | 'role' | 'ready'>
  > {
  myRole: RoleType;
  memberId: number;
  onMenuClick: (menu: string, memberId: number) => void;
}

export default function MemberCard({
  myRole,
  memberId,
  nickname,
  profileImage,
  role: memberRole,
  ready,
  onMenuClick,
}: MemberProps) {
  const menuList: MenuListProps[] = [
    {
      id: 1,
      text: MENU_TEXT.TRANSFER_HOST,
      onClick: () => onMenuClick(MENU_TEXT.TRANSFER_HOST, memberId),
    },
    // 소켓 미구현으로 보류
    // {
    //   id: 2,
    //   text: MENU_TEXT.KICKOUT,
    //   onClick: () => onMenuClick(MENU_TEXT.KICKOUT, memberId),
    // },
  ];

  return (
    <S.CardWrapper>
      <S.MenuWrapper>
        {myRole === ROOM_ROLE.HOST && memberRole === ROOM_ROLE.PARTICIPANT && (
          <Menu
            menuList={menuList}
            className="menu_host"
          >
            <Icon onClick={() => {}}>
              <MoreVertRounded />
            </Icon>
          </Menu>
        )}
        <Audio />
      </S.MenuWrapper>
      <Avatar
        src={profileImage ?? ''}
        size="M"
      />
      <S.NameWrapper>{nickname}</S.NameWrapper>
      <StatusTag
        role={memberRole ?? ROOM_ROLE.PARTICIPANT}
        ready={ready ?? false}
      />
    </S.CardWrapper>
  );
}
