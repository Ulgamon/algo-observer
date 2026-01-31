import { useState, useEffect } from 'react';

interface LessonStep {
  description: string;
  highlightedLines: number[];
  variables: Record<string, any>;
  highlightedVars: string[];
  visualData: any;
}

interface LessonData {
  title: string;
  category: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  pseudocode: string[];
  overview: string;
  explanation: string[];
  useCases: string[];
  steps: LessonStep[];
}

export function useLessonState(lessonData: LessonData) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const totalSteps = lessonData.steps.length - 1;
  const currentStepData = lessonData.steps[currentStep];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || currentStep >= totalSteps) {
      setIsPlaying(false);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }, 1500 / speed);

    return () => clearTimeout(timeout);
  }, [isPlaying, currentStep, totalSteps, speed]);

  const handlePlayPause = () => {
    if (currentStep >= totalSteps) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    setIsPlaying(false);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
    setIsPlaying(false);
  };

  return {
    currentStep,
    isPlaying,
    speed,
    totalSteps,
    currentStepData,
    handlePlayPause,
    handleStep,
    handleReset,
    handleStepChange,
    setSpeed,
  };
}
