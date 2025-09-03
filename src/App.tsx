import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/themecontext/themecontext";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
