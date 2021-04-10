import styled, { css } from "styled-components";

const Input = styled.input`
  background-color: ${({ theme }) => theme.grey};
  border: none;
  width: 250px;
  height: 50px;
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme }) => theme.fontSize.m};

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
    `}
`;

export default Input;
