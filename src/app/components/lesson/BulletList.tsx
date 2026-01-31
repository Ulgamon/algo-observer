interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
          <span className="text-blue-600 dark:text-blue-500 mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
