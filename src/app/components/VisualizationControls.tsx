import { Play, Pause, SkipForward, RotateCcw, Settings } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface VisualizationControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onStep: () => void;
  onReset: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  currentStep: number;
  totalSteps: number;
}

export function VisualizationControls({
  isPlaying,
  onPlayPause,
  onStep,
  onReset,
  speed,
  onSpeedChange,
  currentStep,
  totalSteps,
}: VisualizationControlsProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={onPlayPause}
          className="border-zinc-300 dark:border-zinc-700"
        >
          {isPlaying ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4" />
          )}
          <span className="ml-2 hidden sm:inline">
            {isPlaying ? "Pause" : "Play"}
          </span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={onStep}
          disabled={currentStep >= totalSteps}
          className="border-zinc-300 dark:border-zinc-700"
        >
          <SkipForward className="size-4" />
          <span className="ml-2 hidden sm:inline">Step</span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={onReset}
          className="border-zinc-300 dark:border-zinc-700"
        >
          <RotateCcw className="size-4" />
          <span className="ml-2 hidden sm:inline">Reset</span>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="hidden sm:inline">Step:</span>
          <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">
            {currentStep} / {totalSteps}
          </span>
        </div>

        <div className="flex items-center gap-2 w-32 hidden md:flex">
          <Settings className="size-4 text-zinc-500" />
          <Select
            value={speed.toString()}
            onValueChange={(v) => onSpeedChange(Number(v))}
          >
            <SelectTrigger className="h-8 text-xs border-zinc-300 dark:border-zinc-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0.5">0.5x</SelectItem>
              <SelectItem value="1">1x</SelectItem>
              <SelectItem value="1.5">1.5x</SelectItem>
              <SelectItem value="2">2x</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
