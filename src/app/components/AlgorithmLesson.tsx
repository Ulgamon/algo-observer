import { useState } from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/app/components/ui/resizable";
import { DocumentationPanel } from "./lesson/DocumentationPanel";
import { VisualizationSection } from "./lesson/VisualizationSection";
import { useLessonState } from "./lesson/useLessonState";
import { Button } from "@/app/components/ui/button";
import { Eye, BookOpen } from "lucide-react";

interface AlgorithmLessonProps {
  algorithmId: string;
}

export function AlgorithmLesson({ algorithmId }: AlgorithmLessonProps) {
  const [showVisualization, setShowVisualization] = useState(false);
  const lessonData = getLessonData(algorithmId);
  const {
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
  } = useLessonState(lessonData);

  return (
    <div className="h-full flex flex-col">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowVisualization(!showVisualization)}
          className="w-full gap-2"
        >
          {showVisualization ? (
            <>
              <BookOpen className="size-4" />
              <span>Show Documentation</span>
            </>
          ) : (
            <>
              <Eye className="size-4" />
              <span>Show Visualization</span>
            </>
          )}
        </Button>
      </div>

      {/* Mobile View - Show either Documentation OR Visualization */}
      <div className="flex-1 lg:hidden overflow-hidden">
        {showVisualization ? (
          <VisualizationSection
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onStep={handleStep}
            onReset={handleReset}
            speed={speed}
            onSpeedChange={setSpeed}
            currentStep={currentStep}
            totalSteps={totalSteps}
            stepDescriptions={lessonData.steps.map((s) => s.description)}
            onStepChange={handleStepChange}
            visualData={currentStepData.visualData}
            algorithmId={algorithmId}
            variables={currentStepData.variables}
            highlightedVars={currentStepData.highlightedVars}
          />
        ) : (
          <DocumentationPanel
            lessonData={lessonData}
            highlightedLines={currentStepData.highlightedLines}
          />
        )}
      </div>

      {/* Desktop View - Resizable Panels */}
      <div className="hidden lg:block flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* Documentation Panel */}
          <ResizablePanel defaultSize={45} minSize={30} maxSize={60}>
            <DocumentationPanel
              lessonData={lessonData}
              highlightedLines={currentStepData.highlightedLines}
            />
          </ResizablePanel>

          <ResizableHandle className="w-1 bg-zinc-200 dark:bg-zinc-800 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors" />

          {/* Visualization Panel */}
          <ResizablePanel defaultSize={55} minSize={40}>
            <VisualizationSection
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onStep={handleStep}
              onReset={handleReset}
              speed={speed}
              onSpeedChange={setSpeed}
              currentStep={currentStep}
              totalSteps={totalSteps}
              stepDescriptions={lessonData.steps.map((s) => s.description)}
              onStepChange={handleStepChange}
              visualData={currentStepData.visualData}
              algorithmId={algorithmId}
              variables={currentStepData.variables}
              highlightedVars={currentStepData.highlightedVars}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

// function VisualizationCanvas({
//   data,
//   algorithmId,
// }: {
//   data: unknown;
//   algorithmId: string;
// }) {
//   // Simple array visualization
//   if (Array.isArray(data)) {
//     return (
//       <div className="flex gap-2">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`w-16 h-16 flex items-center justify-center rounded-lg font-mono font-semibold text-lg transition-all ${
//               item.highlighted
//                 ? "bg-blue-500 text-white scale-110 shadow-lg"
//                 : item.sorted
//                   ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-2 border-green-500"
//                   : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-2 border-zinc-300 dark:border-zinc-700"
//             }`}
//           >
//             {item.value}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   // Graph visualization placeholder
//   if (algorithmId.includes("search") || algorithmId.includes("graph")) {
//     return (
//       <div className="text-center">
//         <div className="mb-4 text-6xl">🔍</div>
//         <p className="text-sm text-zinc-600 dark:text-zinc-400">
//           Graph visualization
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="text-center text-zinc-500 dark:text-zinc-600">
//       <p className="text-sm">Visualization canvas</p>
//     </div>
//   );
// }

function getLessonData(algorithmId: string) {
  const data: LessonsById = {
    "quick-sort": {
      title: "Quick Sort",
      category: "Sorting & Searching",
      description:
        "A divide-and-conquer sorting algorithm that picks a pivot and partitions the array.",
      timeComplexity: "O(n log n) average, O(n²) worst",
      spaceComplexity: "O(log n)",
      pseudocode: [
        "function quickSort(arr, low, high):",
        "  if low < high:",
        "    pivot = partition(arr, low, high)",
        "    quickSort(arr, low, pivot - 1)",
        "    quickSort(arr, pivot + 1, high)",
        "",
        "function partition(arr, low, high):",
        "  pivot = arr[high]",
        "  i = low - 1",
        "  for j from low to high - 1:",
        "    if arr[j] < pivot:",
        "      i = i + 1",
        "      swap arr[i] and arr[j]",
        "  swap arr[i + 1] and arr[high]",
        "  return i + 1",
      ],
      overview:
        "Quick Sort is an efficient, in-place sorting algorithm that uses divide-and-conquer strategy. It picks an element as pivot and partitions the array around the pivot, placing smaller elements before it and larger elements after it.",
      explanation: [
        "Choose a pivot element from the array (commonly the last element)",
        "Partition the array by moving elements smaller than pivot to the left",
        "Place the pivot in its correct sorted position",
        "Recursively apply the same process to the left and right sub-arrays",
        "Continue until all sub-arrays are sorted",
      ],
      useCases: [
        "General-purpose sorting with good average performance",
        "When in-place sorting is required to save memory",
        "Sorting large datasets where cache performance matters",
        "As a building block in other algorithms",
      ],
      steps: [
        {
          description: "Initial array: [5, 2, 8, 1, 9]. Select pivot (9).",
          highlightedLines: [0, 1],
          variables: { arr: [5, 2, 8, 1, 9], pivot: 9, low: 0, high: 4 },
          highlightedVars: ["pivot"],
          visualData: [
            { value: 5, highlighted: false, sorted: false },
            { value: 2, highlighted: false, sorted: false },
            { value: 8, highlighted: false, sorted: false },
            { value: 1, highlighted: false, sorted: false },
            { value: 9, highlighted: true, sorted: false },
          ],
        },
        {
          description:
            "Partition: Compare 5 with pivot 9. 5 < 9, stays on left.",
          highlightedLines: [10, 11],
          variables: { arr: [5, 2, 8, 1, 9], pivot: 9, i: 0, j: 0 },
          highlightedVars: ["i", "j"],
          visualData: [
            { value: 5, highlighted: true, sorted: false },
            { value: 2, highlighted: false, sorted: false },
            { value: 8, highlighted: false, sorted: false },
            { value: 1, highlighted: false, sorted: false },
            { value: 9, highlighted: false, sorted: false },
          ],
        },
        {
          description: "Compare 8 with pivot 9. 8 < 9, stays on left.",
          highlightedLines: [10, 11],
          variables: { arr: [5, 2, 8, 1, 9], pivot: 9, i: 2, j: 2 },
          highlightedVars: ["j"],
          visualData: [
            { value: 5, highlighted: false, sorted: false },
            { value: 2, highlighted: false, sorted: false },
            { value: 8, highlighted: true, sorted: false },
            { value: 1, highlighted: false, sorted: false },
            { value: 9, highlighted: false, sorted: false },
          ],
        },
        {
          description: "Place pivot in correct position. Pivot is now sorted.",
          highlightedLines: [13, 14],
          variables: { arr: [5, 2, 8, 1, 9], pivot: 9, i: 3 },
          highlightedVars: ["pivot"],
          visualData: [
            { value: 5, highlighted: false, sorted: false },
            { value: 2, highlighted: false, sorted: false },
            { value: 8, highlighted: false, sorted: false },
            { value: 1, highlighted: false, sorted: false },
            { value: 9, highlighted: true, sorted: true },
          ],
        },
        {
          description: "Recursively sort left partition [5, 2, 8, 1].",
          highlightedLines: [3],
          variables: { arr: [5, 2, 8, 1, 9], low: 0, high: 3 },
          highlightedVars: [],
          visualData: [
            { value: 5, highlighted: false, sorted: false },
            { value: 2, highlighted: false, sorted: false },
            { value: 8, highlighted: false, sorted: false },
            { value: 1, highlighted: false, sorted: false },
            { value: 9, highlighted: false, sorted: true },
          ],
        },
        {
          description: "Sorting complete! All elements in correct position.",
          highlightedLines: [],
          variables: { arr: [1, 2, 5, 8, 9] },
          highlightedVars: [],
          visualData: [
            { value: 1, highlighted: false, sorted: true },
            { value: 2, highlighted: false, sorted: true },
            { value: 5, highlighted: false, sorted: true },
            { value: 8, highlighted: false, sorted: true },
            { value: 9, highlighted: false, sorted: true },
          ],
        },
      ],
    },
    "depth-first-search": {
      title: "Depth First Search",
      category: "Graphs",
      description:
        "Explore graph nodes by going as deep as possible before backtracking.",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      pseudocode: [
        "function dfs(graph, start, visited):",
        "  visited.add(start)",
        "  process(start)",
        "  ",
        "  for each neighbor in graph[start]:",
        "    if neighbor not in visited:",
        "      dfs(graph, neighbor, visited)",
        "  ",
        "  return visited",
      ],
      overview:
        "Depth-First Search explores a graph by going as far as possible along each branch before backtracking. It uses recursion or an explicit stack to keep track of vertices to visit.",
      explanation: [
        "Start at a given vertex and mark it as visited",
        "Explore each unvisited neighbor recursively",
        "Go as deep as possible before backtracking",
        "Continue until all reachable vertices are visited",
      ],
      useCases: [
        "Finding connected components in a graph",
        "Detecting cycles in directed and undirected graphs",
        "Topological sorting of directed acyclic graphs",
        "Solving maze and puzzle problems",
      ],
      steps: [
        {
          description: "Start DFS at node A. Mark A as visited.",
          highlightedLines: [1, 2],
          variables: { current: "A", visited: ["A"] },
          highlightedVars: ["current"],
          visualData: { current: "A", visited: ["A"] },
        },
        {
          description: "Visit neighbor B from A. Mark B as visited.",
          highlightedLines: [5, 6],
          variables: { current: "B", visited: ["A", "B"] },
          highlightedVars: ["current"],
          visualData: { current: "B", visited: ["A", "B"] },
        },
        {
          description: "Visit neighbor D from B. Mark D as visited.",
          highlightedLines: [5, 6],
          variables: { current: "D", visited: ["A", "B", "D"] },
          highlightedVars: ["current"],
          visualData: { current: "D", visited: ["A", "B", "D"] },
        },
        {
          description: "Backtrack to B. No more unvisited neighbors.",
          highlightedLines: [8],
          variables: { current: "B", visited: ["A", "B", "D"] },
          highlightedVars: [],
          visualData: { current: "B", visited: ["A", "B", "D"] },
        },
      ],
    },
  };

  return data[algorithmId] || data["quick-sort"];
}

export type AlgorithmId = string;

export type VisualBar = {
  value: number;
  highlighted: boolean;
  sorted: boolean;
};

export type SortingVisualData = VisualBar[];

export type GraphVisualData = {
  current: string;
  visited: string[];
  // add more later: stack?: string[], edgesHighlighted?: [string,string][]
};

export type VisualData = SortingVisualData | GraphVisualData;

export type LessonStep = {
  description: string;
  highlightedLines: number[];
  variables: Record<string, unknown>; // flexible per algorithm
  highlightedVars: string[];
  visualData: VisualData;
};

export type AlgorithmLesson = {
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
};

export type LessonsById = Record<AlgorithmId, AlgorithmLesson>;
