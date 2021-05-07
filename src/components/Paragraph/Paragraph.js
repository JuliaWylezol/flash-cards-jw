import styled, { css } from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  align-self: center;
  margin: 0;

  @media (max-width: 570px) {
    font-size: 20px;
  }

  @media (max-width: 470px) {
    font-size: 16px;
  }

  ${({ onCard }) =>
    onCard &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
    `}

  ${({ small }) =>
    small &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.light};
      margin-top: 10px;
    `}

    ${({ category }) =>
    category &&
    css`
      color: black;
      font-size: ${({ theme }) => theme.fontSize.l};
      margin-bottom: 20px;
    `}
`;

export default Paragraph;
