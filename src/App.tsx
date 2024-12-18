import ThemeProvider from "@/providers/ThemeProvider";
import Router from "@/components/routes";

function App() {
  return (
      <ThemeProvider>
        <Router />
      </ThemeProvider>
  );
}

export default App;