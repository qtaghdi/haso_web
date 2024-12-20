import React, {ReactNode} from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import GlobalStyles from "@/design/GlobalStyle";
import {theme} from "@/design/theme"

interface ThemeProviderProps {
    children: ReactNode;
}

function ThemeProvider({children}: ThemeProviderProps) {
    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyles/>
            {children}
        </StyledThemeProvider>
    );
}

export default ThemeProvider;
