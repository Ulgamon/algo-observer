import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Textarea } from '@/app/components/ui/textarea';

interface InputEditorProps {
  onInputChange: (input: string) => void;
  placeholder?: string;
  defaultValue?: string;
}

export function InputEditor({ onInputChange, placeholder, defaultValue }: InputEditorProps) {
  const [input, setInput] = useState(defaultValue || '');

  const handleApply = () => {
    onInputChange(input);
  };

  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Input Data</h3>
      </div>
      <div className="p-4 space-y-3">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder || 'Enter your input data...'}
          className="font-mono text-sm min-h-24 resize-none bg-zinc-50 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700"
        />
        <Button
          size="sm"
          onClick={handleApply}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Apply Input
        </Button>
      </div>
    </div>
  );
}
