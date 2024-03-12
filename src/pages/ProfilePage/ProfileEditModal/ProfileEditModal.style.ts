import styled, { css } from 'styled-components';

export const ModalTitle = styled.p`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.size.XXL};
    left: ${theme.size.XXL};
    font-size: ${theme.size.L};
    font-weight: ${theme.fontWeight.semiBold};
  `}
`;

export const ModalForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.size.L};
    align-items: center;
    width: 30rem;
    button {
      width: 50%;
    }
  `}
`;

export const ModalInputList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.size.M};
    width: 100%;
  `}
`;

export const ModalInputItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    height: 9rem;
    label {
      font-size: ${theme.size.M};
      font-weight: ${theme.fontWeight.semiBold};
    }
    input {
      &::placeholder {
        color: ${theme.color.gray_30};
      }
    }
  `}
`;
