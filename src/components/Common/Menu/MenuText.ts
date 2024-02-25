import { MouseEvent } from 'react';

export interface MenuListProps {
  id: number;
  text: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

interface MenuTextProps {
  Report: string;
  TransferHost: string;
  KickOut: string;
}

export const MenuText: MenuTextProps = {
  Report: '신고하기',
  TransferHost: '방장 위임',
  KickOut: '강제 퇴장',
};