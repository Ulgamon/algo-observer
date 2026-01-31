import { VisualizationControls } from '../VisualizationControls';
import { StepTimeline } from '../StepTimeline';
import { VisualizationCanvas } from './VisualizationCanvas';
import { CollapsiblePanel } from './CollapsiblePanel';
import { VariableInspector } from '../VariableInspector';

interface VisualizationSectionProps {
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
  visualData: any;
  algorithmId: string;
  variables: Record<string, any>;
  highlightedVars: string[];
}

export function VisualizationSection({
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
  variables,
  highlightedVars,
}: VisualizationSectionProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Controls */}
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

      {/* Canvas */}
      <div className="flex-1 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-8 overflow-auto">
        <VisualizationCanvas data={visualData} algorithmId={algorithmId} />
      </div>

      {/* Timeline */}
      <StepTimeline
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepChange={onStepChange}
        stepDescriptions={stepDescriptions}
      />

      {/* Variables Panel - Collapsible */}
      <CollapsiblePanel title="Variable State" defaultOpen={true}>
        <VariableInspector variables={variables} highlightedVars={highlightedVars} />
      </CollapsiblePanel>
    </div>
  );
}
