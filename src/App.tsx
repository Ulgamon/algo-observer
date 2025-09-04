import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "./context/themecontext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Navbar />
        <Sidebar />
        <div className="max-w-[1600px] pt-20 min-h-screen outline-1 mx-auto">
          <Routes>
            <Route index element={<p>index</p>} />
            <Route path="sorting" element={<p>sorting</p>} />
            <Route path="divideconquer" element={<p>sorting</p>} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
