import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
  background-image: url(${({ icon }) => icon});
  background-position: center;
  border: none;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: transparent;

  ${({ exit }) =>
    exit &&
    css`
      position: absolute;
      display: block;
      padding: 0;
      top: 5px;
      right: 5px;
      width: 50px;
      height: 50px;
    `}

  ${({ back }) =>
    back &&
    css`
      position: absolute;
      display: block;
      padding: 0;
      top: 20px;
      right: 20px;
    `}

    ${({ trash }) =>
    trash &&
    css`
      width: 40px;
      height: 40px;
      margin-left: 10px;
      margin-top: 10px;
    `}
`;

export default ButtonIcon;
