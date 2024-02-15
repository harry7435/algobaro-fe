import { useMemo } from 'react';

import {
  AvatarContainer,
  AvatarProps,
  AvatarWrapper,
  EditButtonWrapper,
} from './Avatar.style';
import EditButton from './EditButton';

/**
 * @param [size='S'] - XS, S, M, L, XL
 * @param [shape='circle'] - circle은 원형, square는 사각형, round는 둥근 사각형
 * @param src - 이미지 소스
 * @param [isBorder=true] - true는 보더(solid) 적용
 * @param [isShadow=true] - true는 그림자 적용
 * @param [isEdit=false] - true는 그림자 적용
 */
export default function Avatar({
  size = 'S',
  shape = 'circle',
  src,
  isBorder = true,
  isShadow = true,
  isEdit = false,
  onClick,
  ...props
}: AvatarProps) {
  const isPointer = useMemo(() => {
    return onClick ? true : false;
  }, []);

  return (
    <AvatarContainer
      $isPointer={isPointer}
      onClick={onClick}
    >
      <AvatarWrapper
        size={size}
        shape={shape}
        src={src}
        $isBorder={isBorder}
        $isShadow={isShadow}
        {...props}
      ></AvatarWrapper>
      {isEdit && (
        <EditButtonWrapper>
          <EditButton />
        </EditButtonWrapper>
      )}
    </AvatarContainer>
  );
}
