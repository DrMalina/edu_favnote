import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  :focus {outline:none;}
  :-moz-focus-inner {border:0;}

  html {
    font-size: 62.5%;
  }

  body {
    padding-left: 150px;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
