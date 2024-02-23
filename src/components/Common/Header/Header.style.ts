import styled from 'styled-components';
import { css } from 'styled-components';

const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${theme.FIXED_HEIGHT.HEADER};
    padding: 0 2.5rem;
    background-color: ${theme.color.background_menu};
    border-bottom: 1px solid
      ${theme.mode === 'light' ? theme.color.gray_20 : 'none'};
  `}
`;

const LogoWrapper = styled.div``;

const LogoText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.size.L};
    font-weight: ${theme.fontWeight.semiBold};
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 2.2rem;
  align-items: center;
`;

export { HeaderWrapper, IconWrapper, LogoText, LogoWrapper };
