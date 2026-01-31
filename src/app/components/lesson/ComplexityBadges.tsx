interface ComplexityBadgesProps {
  timeComplexity: string;
  spaceComplexity: string;
}

export function ComplexityBadges({ timeComplexity, spaceComplexity }: ComplexityBadgesProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Badge label="Time Complexity" value={timeComplexity} color="green" />
      <Badge label="Space Complexity" value={spaceComplexity} color="blue" />
    </div>
  );
}

interface BadgeProps {
  label: string;
  value: string;
  color: 'green' | 'blue';
}

function Badge({ label, value, color }: BadgeProps) {
  const colorClasses = {
    green: 'text-green-700 dark:text-green-400',
    blue: 'text-blue-700 dark:text-blue-400',
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2">
      <div className="text-xs text-zinc-600 dark:text-zinc-500 mb-1">{label}</div>
      <div className={`font-mono text-sm ${colorClasses[color]}`}>{value}</div>
    </div>
  );
}
