import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    background-color: #292826;
  }
`;

export default GlobalStyle;
