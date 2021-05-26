import styled, { css } from "styled-components";

const Button = styled.button`
  width: 250px;
  height: 70px;
  background-color: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  @media (max-width: 660px) {
    width: 200px;
    height: 55px;
    font-size: 20px;
  }
  @media (max-width: 400px) {
    width: 150px;
    height: 55px;
    font-size: 16px;
  }

  ${({ start }) =>
    start &&
    css`
      height: 50px;
      text-align: center;
      padding: 10px;
    `}

  ${({ finish }) =>
    finish &&
    css`
      color: ${({ theme }) => theme.grey};
      background-color: ${({ theme }) => theme.yellow};
      text-align: center;
      padding-top: 15px;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    `}
`;

export default Button;
