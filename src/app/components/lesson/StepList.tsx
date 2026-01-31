interface StepListProps {
  steps: string[];
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <StepItem key={index} number={index + 1} text={step} />
      ))}
    </div>
  );
}

interface StepItemProps {
  number: number;
  text: string;
}

function StepItem({ number, text }: StepItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 size-8 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-500 font-semibold text-sm">
        {number}
      </div>
      <p className="flex-1 text-zinc-700 dark:text-zinc-300 pt-1">{text}</p>
    </div>
  );
}
