import {createGlobalStyle} from "styled-components";
import { fonts } from "./fonts";
import {theme} from "@/design/theme";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({theme}) => theme.typography.fonts["Pretendard-medium"]};
        color: ${({theme}) => theme.colors.text.Dark};
        background-color: ${({theme}) => theme.colors.white};
        line-height: 1;
    }
    ${fonts}
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
