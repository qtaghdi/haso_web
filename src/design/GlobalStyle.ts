import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${({ theme }) => theme.typography.fonts["Pretendard-Regular"]};
    color: ${({ theme }) => theme.colors.Text.Dark};
    background-color: ${({ theme }) => theme.colors.White.White};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
