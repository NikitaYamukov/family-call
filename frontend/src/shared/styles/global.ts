import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f7f9fb;
    color: #1a1a1a;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;