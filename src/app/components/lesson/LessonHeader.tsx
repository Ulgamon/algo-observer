interface LessonHeaderProps {
  category: string;
  title: string;
  description: string;
}

export function LessonHeader({ category, title, description }: LessonHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-500 mb-4">
        <span>Algorithms</span>
        <span>/</span>
        <span>{category}</span>
      </div>
      <h1 className="text-3xl mb-3 text-zinc-900 dark:text-zinc-100">{title}</h1>
      <p className="text-base text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}
