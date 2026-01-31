import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { VariableInspector } from '../VariableInspector';
import { InputEditor } from '../InputEditor';

interface SidePanelProps {
  variables: Record<string, any>;
  highlightedVars: string[];
  onInputChange: (input: string) => void;
}

export function SidePanel({ variables, highlightedVars, onInputChange }: SidePanelProps) {
  return (
    <div className="h-full bg-zinc-50 dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 p-4">
      <Tabs defaultValue="variables" className="h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="variables" className="text-xs">Variables</TabsTrigger>
          <TabsTrigger value="input" className="text-xs">Input</TabsTrigger>
          <TabsTrigger value="toc" className="text-xs">Contents</TabsTrigger>
        </TabsList>

        <TabsContent value="variables" className="flex-1 mt-0">
          <VariableInspector variables={variables} highlightedVars={highlightedVars} />
        </TabsContent>

        <TabsContent value="input" className="flex-1 mt-0">
          <InputEditor
            onInputChange={onInputChange}
            placeholder="e.g., [5, 2, 8, 1, 9]"
            defaultValue="[5, 2, 8, 1, 9]"
          />
        </TabsContent>

        <TabsContent value="toc" className="flex-1 mt-0">
          <TableOfContents />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TableOfContents() {
  const sections = ['Overview', 'Algorithm', 'How It Works', 'Use Cases'];

  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
      <nav className="space-y-1">
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}
