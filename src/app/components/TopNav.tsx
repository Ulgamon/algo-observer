import { Search, BookOpen, Menu, Sun, Moon, Github } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { useTheme } from 'next-themes';

interface TopNavProps {
  onToggleSidebar: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function TopNav({ onToggleSidebar, activeSection, onSectionChange }: TopNavProps) {
  const sections = ['Introduction', 'Data Structures', 'Algorithms', 'Visualizations'];
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-zinc-800 dark:border-zinc-800 bg-white dark:bg-zinc-950 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800 lg:hidden"
          >
            <Menu className="size-5 text-zinc-600 dark:text-zinc-400" />
          </Button>
          <div className="flex items-center gap-2">
            <BookOpen className="size-6 text-blue-600 dark:text-blue-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Algo.Observer</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-md mx-4 md:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500 dark:text-zinc-500" />
            <Input
              type="search"
              placeholder="Search algorithms..."
              className="pl-10 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-500 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500"
            />
          </div>
        </div>

        {/* Right section - Navigation tabs and theme toggle */}
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === section
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
          
          <a
            href="https://github.com/Ulgamon/algo-observer"
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Github className="size-5 text-zinc-600 dark:text-zinc-400" />
            </Button>
          </a>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Sun className="size-5 text-zinc-600 dark:text-zinc-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-5 text-zinc-600 dark:text-zinc-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}