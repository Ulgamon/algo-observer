import { VisualizationControls } from "../VisualizationControls";
import { StepTimeline } from "../StepTimeline";
import { VisualizationCanvas } from "./VisualizationCanvas";

interface VisualizationPanelProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onStep: () => void;
  onReset: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  currentStep: number;
  totalSteps: number;
  stepDescriptions: string[];
  onStepChange: (step: number) => void;
  visualData: unknown;
  algorithmId: string;
}

export function VisualizationPanel({
  isPlaying,
  onPlayPause,
  onStep,
  onReset,
  speed,
  onSpeedChange,
  currentStep,
  totalSteps,
  stepDescriptions,
  onStepChange,
  visualData,
  algorithmId,
}: VisualizationPanelProps) {
  return (
    <div className="h-full flex flex-col">
      <VisualizationControls
        isPlaying={isPlaying}
        onPlayPause={onPlayPause}
        onStep={onStep}
        onReset={onReset}
        speed={speed}
        onSpeedChange={onSpeedChange}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      <div className="flex-1 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-8">
        <VisualizationCanvas data={visualData} algorithmId={algorithmId} />
      </div>

      <StepTimeline
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepChange={onStepChange}
        stepDescriptions={stepDescriptions}
      />
    </div>
  );
}
