interface PseudocodeViewerProps {
  code: string[];
  highlightedLines: number[];
}

export function PseudocodeViewer({
  code,
  highlightedLines,
}: PseudocodeViewerProps) {
  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Pseudocode
        </h3>
      </div>
      <div className="p-4 bg-zinc-50 dark:bg-zinc-900">
        <div className="font-mono text-sm leading-relaxed">
          {code.map((line, index) => (
            <CodeLine
              key={index}
              lineNumber={index + 1}
              content={line}
              isHighlighted={highlightedLines.includes(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CodeLineProps {
  lineNumber: number;
  content: string;
  isHighlighted: boolean;
}

function CodeLine({ lineNumber, content, isHighlighted }: CodeLineProps) {
  return (
    <div
      className={`px-3 py-1 -mx-3 transition-colors ${
        isHighlighted
          ? "bg-yellow-100 dark:bg-yellow-500/20 border-l-2 border-yellow-500 dark:border-yellow-400"
          : ""
      }`}
    >
      <span className="inline-block w-6 text-zinc-400 dark:text-zinc-600 select-none">
        {lineNumber}
      </span>
      <span className="text-zinc-800 dark:text-zinc-200">{content}</span>
    </div>
  );
}
