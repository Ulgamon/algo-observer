import { useState } from "react";
import { TopNav } from "@/app/components/TopNav";
import { LeftSidebar } from "@/app/components/LeftSidebar";
import { MainContent } from "@/app/components/MainContent";
import { RightSidebar } from "@/app/components/RightSidebar";
import { ThemeProvider } from "@/app/components/ThemeProvider";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  const handleSectionChange = () => {
    setSelectedAlgorithm(""); // Clear selected algorithm when changing sections
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectAlgorithm = (id: string) => {
    setSelectedAlgorithm(id);
    // On mobile, close sidebar after selection
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
        <TopNav onToggleSidebar={handleToggleSidebar} />

        <div className="flex-1 flex overflow-hidden">
          <LeftSidebar
            isOpen={isSidebarOpen}
            selectedAlgorithm={selectedAlgorithm}
            onSelectAlgorithm={handleSelectAlgorithm}
          />

          <main className="flex-1 overflow-y-auto bg-white dark:bg-black">
            <MainContent
              selectedAlgorithm={selectedAlgorithm}
              onSelectAlgorithm={setSelectedAlgorithm}
              onSectionChange={handleSectionChange}
            />
          </main>

          <RightSidebar selectedAlgorithm={selectedAlgorithm} />
        </div>
      </div>
    </ThemeProvider>
  );
}
