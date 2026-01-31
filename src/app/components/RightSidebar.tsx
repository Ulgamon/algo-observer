import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Clock, TrendingUp } from "lucide-react";

interface RightSidebarProps {
  selectedAlgorithm: string;
}

export function RightSidebar({ selectedAlgorithm }: RightSidebarProps) {
  if (!selectedAlgorithm) return null;

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "how-it-works", label: "How It Works" },
    { id: "implementation", label: "Implementation" },
    { id: "use-cases", label: "Common Use Cases" },
  ];

  return (
    <aside className="hidden xl:block w-56 border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex-col">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          On This Page
        </h2>
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-3 space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="p-3 mt-6">
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-500 mb-2">
                <Clock className="size-3" />
                <span>Est. Time</span>
              </div>
              <div className="text-sm text-zinc-900 dark:text-zinc-300">
                15 minutes
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-500 mb-2">
                <TrendingUp className="size-3" />
                <span>Difficulty</span>
              </div>
              <div className="text-sm text-zinc-900 dark:text-zinc-300">
                Intermediate
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}
