import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "./context/themecontext";
import { Error } from "./pages/Error";
import { SidebarProvider } from "./context/sidebarcontext";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider showSidebar={false}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Navbar />
          <Sidebar />
          <div className="max-w-[1600px] pt-20 min-h-screen mx-auto">
            <Routes>
              <Route index element={<p>index</p>} />
              <Route path="sorting" element={<p>sorting</p>} />
              <Route path="divideconquer" element={<p>sorting</p>} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </ThemeProvider>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
