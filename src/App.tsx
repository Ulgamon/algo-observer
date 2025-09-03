import Navbar from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ThemeProvider } from "./context/themecontext/themecontext";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Navbar />
      <Sidebar />
      <div className="max-w-[1600px] pt-20 min-h-screen outline-1 mx-auto">
        sadfasfdsafd
      </div>
    </ThemeProvider>
  );
}

export default App;
