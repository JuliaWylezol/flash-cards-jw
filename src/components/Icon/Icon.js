import styled, { css } from "styled-components";

const Icon = styled.img`
  background-image: url(${({ src }) => src});
  display: block;
  margin-left: auto;
  margin-right: auto;

  /* @media (max-width: 570px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  } */
`;

export default Icon;
