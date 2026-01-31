interface StepTimelineProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  stepDescriptions: string[];
}

export function StepTimeline({ currentStep, totalSteps, onStepChange, stepDescriptions }: StepTimelineProps) {
  return (
    <div className="px-4 py-4 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <TimelineBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepChange={onStepChange}
      />
      <StepDescription description={stepDescriptions[currentStep] || 'Ready to begin'} />
    </div>
  );
}

interface TimelineBarProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
}

function TimelineBar({ currentStep, totalSteps, onStepChange }: TimelineBarProps) {
  const steps = Array.from({ length: totalSteps + 1 }, (_, i) => i);

  return (
    <div className="mb-4">
      <div className="flex items-center gap-1">
        {steps.map((index) => (
          <TimelineStep
            key={index}
            index={index}
            currentStep={currentStep}
            onStepChange={onStepChange}
          />
        ))}
      </div>
    </div>
  );
}

interface TimelineStepProps {
  index: number;
  currentStep: number;
  onStepChange: (step: number) => void;
}

function TimelineStep({ index, currentStep, onStepChange }: TimelineStepProps) {
  const isActive = index === currentStep;
  const isCompleted = index <= currentStep;

  const getStyles = () => {
    if (isCompleted) {
      return 'bg-blue-600 dark:bg-blue-500';
    }
    return 'bg-zinc-200 dark:bg-zinc-800';
  };

  const getRingStyles = () => {
    if (isActive) {
      return 'ring-2 ring-blue-400 ring-offset-2 dark:ring-offset-zinc-950';
    }
    return '';
  };

  return (
    <button
      onClick={() => onStepChange(index)}
      className={`flex-1 h-2 rounded-full transition-all ${getStyles()} ${getRingStyles()}`}
      title={`Step ${index}`}
    />
  );
}

interface StepDescriptionProps {
  description: string;
}

function StepDescription({ description }: StepDescriptionProps) {
  return (
    <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-lg p-4">
      <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">
        CURRENT STEP
      </div>
      <p className="text-sm text-zinc-800 dark:text-zinc-200">{description}</p>
    </div>
  );
}