import { ThemeContext } from './theme'
import { theme } from '@/design/theme'
import GlobalStyles from '@/design/GlobalStyle'

interface ThemeProviderProps {
    children: React.ReactNode;
}

function ThemeProvider({children}: ThemeProviderProps) {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyles/>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
