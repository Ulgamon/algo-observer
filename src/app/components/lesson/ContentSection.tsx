interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">{title}</h2>
      {children}
    </section>
  );
}
