interface VisualizationCanvasProps {
  data: unknown;
  algorithmId: string;
}

export function VisualizationCanvas({
  data,
  algorithmId,
}: VisualizationCanvasProps) {
  if (Array.isArray(data)) {
    return <ArrayVisualization data={data} />;
  }

  if (algorithmId.includes("search") || algorithmId.includes("graph")) {
    return <GraphVisualization />;
  }

  return <EmptyState />;
}

interface ArrayItem {
  value: number;
  highlighted?: boolean;
  sorted?: boolean;
}

function ArrayVisualization({ data }: { data: ArrayItem[] }) {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {data.map((item, index) => (
        <ArrayCell key={index} item={item} />
      ))}
    </div>
  );
}

function ArrayCell({ item }: { item: ArrayItem }) {
  const getStyles = () => {
    if (item.highlighted) {
      return "bg-blue-500 text-white scale-110 shadow-lg";
    }
    if (item.sorted) {
      return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-2 border-green-500";
    }
    return "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-2 border-zinc-300 dark:border-zinc-700";
  };

  return (
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-lg font-mono font-semibold text-lg transition-all ${getStyles()}`}
    >
      {item.value}
    </div>
  );
}

function GraphVisualization() {
  return (
    <div className="text-center">
      <div className="mb-4 text-6xl">🔍</div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Graph visualization
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center text-zinc-500 dark:text-zinc-600">
      <p className="text-sm">Visualization canvas</p>
    </div>
  );
}
