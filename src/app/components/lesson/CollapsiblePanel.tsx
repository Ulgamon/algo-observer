import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface CollapsiblePanelProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function CollapsiblePanel({ title, children, defaultOpen = true, className = '' }: CollapsiblePanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-t border-zinc-200 dark:border-zinc-800 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      >
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
        {isOpen ? (
          <ChevronUp className="size-4 text-zinc-600 dark:text-zinc-400" />
        ) : (
          <ChevronDown className="size-4 text-zinc-600 dark:text-zinc-400" />
        )}
      </button>
      {isOpen && <div className="p-4 bg-white dark:bg-zinc-950">{children}</div>}
    </div>
  );
}
