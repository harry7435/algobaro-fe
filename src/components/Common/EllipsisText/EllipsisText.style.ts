import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $width: string;
  $fontSize: string;
  $fontWeight: number;
  $lineClamp: number;
}

export const BaseEllipsisText = styled.span<StyledButtonProps>`
  ${({ $width, $fontSize, $fontWeight, $lineClamp }) => css`
    display: -webkit-box;
    width: ${$width};
    overflow: hidden;
    font-size: ${$fontSize};
    font-weight: ${$fontWeight};
    text-overflow: ellipsis;
    word-wrap: keep-all;
    -webkit-line-clamp: ${$lineClamp};
    -webkit-box-orient: vertical;
  `}
`;
