import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/themecontext/themecontext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
