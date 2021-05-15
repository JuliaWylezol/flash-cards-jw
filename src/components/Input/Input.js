import styled, { css } from "styled-components";

const Input = styled.input`
  background-color: ${({ theme }) => theme.grey};
  border: none;
  width: 250px;
  height: 50px;
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme }) => theme.fontSize.m};
  @media (max-width: 660px) {
    height: 40px;
  }
  @media (max-width: 470px) {
    height: 30px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 420px) {
    width: 170px;
  }

  ${({ radio }) =>
    radio &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background-color: ${({ theme }) => theme.grey};
      height: 30px;
      width: 30px;
      padding-left: 5px;
      @media (max-width: 660px) {
        width: 20px;
        height: 20px;
      }
      @media (max-width: 420px) {
        font-size: 12px;
      }
    `}
`;

export default Input;
