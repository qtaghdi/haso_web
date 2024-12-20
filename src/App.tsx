import ThemeProvider from "@/providers/ThemeProvider";
import Router from "@/components/routes";
import {theme} from "@/design/theme";
import GlobalStyles from "@/design/GlobalStyle";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Router />
      </ThemeProvider>
  );
}

export default App;