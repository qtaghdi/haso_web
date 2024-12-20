import React, {ReactNode} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from "@/design/GlobalStyle";

interface ThemeProviderProps {
    children: ReactNode;
    theme: typeof import('@/design/theme').theme;
}

function ThemeProvider({children, theme}: ThemeProviderProps) {
    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyles/>
            {children}
        </StyledThemeProvider>
    );
}

export default ThemeProvider;
