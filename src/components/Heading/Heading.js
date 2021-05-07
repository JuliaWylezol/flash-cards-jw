import styled, { css } from "styled-components";

const Heading = styled.h1`
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-align: center;
  @media (max-width: 420px) {
    font-size: 25px;
  }

  ${({ welcomeText }) =>
    welcomeText &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    `}
`;

export default Heading;
