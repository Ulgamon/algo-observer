interface VariableInspectorProps {
  variables: Record<string, any>;
  highlightedVars?: string[];
}

export function VariableInspector({ variables, highlightedVars = [] }: VariableInspectorProps) {
  const entries = Object.entries(variables);

  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      <div className="p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
        {entries.length === 0 ? (
          <div className="col-span-full">
            <EmptyState />
          </div>
        ) : (
          entries.map(([key, value]) => (
            <VariableItem
              key={key}
              name={key}
              value={value}
              isHighlighted={highlightedVars.includes(key)}
            />
          ))
        )}
      </div>
    </div>
  );
}

interface VariableItemProps {
  name: string;
  value: any;
  isHighlighted: boolean;
}

function VariableItem({ name, value, isHighlighted }: VariableItemProps) {
  const formattedValue = Array.isArray(value) ? `[${value.join(', ')}]` : String(value);

  return (
    <div
      className={`flex flex-col p-3 rounded-lg transition-colors ${
        isHighlighted
          ? 'bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20'
          : 'bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'
      }`}
    >
      <span className="text-xs font-mono font-semibold text-purple-700 dark:text-purple-400 mb-1">
        {name}
      </span>
      <span className="text-sm font-mono text-zinc-800 dark:text-zinc-300 break-all">
        {formattedValue}
      </span>
    </div>
  );
}

function EmptyState() {
  return (
    <p className="text-sm text-zinc-500 dark:text-zinc-600 text-center py-4">
      No variables yet
    </p>
  );
}