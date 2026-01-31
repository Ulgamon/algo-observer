import { ChevronRight, Clock } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/app/components/ui/scroll-area";

interface Algorithm {
  id: string;
  name: string;
  status: "ready" | "soon";
}

interface Category {
  id: string;
  name: string;
  algorithms: Algorithm[];
}

interface LeftSidebarProps {
  isOpen: boolean;
  selectedAlgorithm: string;
  onSelectAlgorithm: (id: string) => void;
}

const categories: Category[] = [
  {
    id: "arrays",
    name: "Arrays & Strings",
    algorithms: [
      { id: "intro-arrays", name: "Introduction to Arrays", status: "ready" },
      { id: "two-sum", name: "Two Sum Problem", status: "ready" },
      { id: "reverse-string", name: "Reverse String", status: "ready" },
    ],
  },
  {
    id: "linked-lists",
    name: "Linked Lists",
    algorithms: [
      { id: "singly-linked-list", name: "Singly Linked List", status: "ready" },
      { id: "doubly-linked-list", name: "Doubly Linked List", status: "ready" },
      { id: "cycle-detection", name: "Cycle Detection", status: "ready" },
    ],
  },
  {
    id: "stacks-queues",
    name: "Stacks & Queues",
    algorithms: [
      {
        id: "stack-implementation",
        name: "Stack Implementation",
        status: "ready",
      },
      { id: "valid-parentheses", name: "Valid Parentheses", status: "ready" },
      { id: "queue-using-stacks", name: "Queue Using Stacks", status: "ready" },
    ],
  },
  {
    id: "trees",
    name: "Trees",
    algorithms: [
      {
        id: "binary-tree-traversal",
        name: "Binary Tree Traversal",
        status: "soon",
      },
      { id: "binary-search-tree", name: "Binary Search Tree", status: "soon" },
      {
        id: "lowest-common-ancestor",
        name: "Lowest Common Ancestor",
        status: "ready",
      },
    ],
  },
  {
    id: "graphs",
    name: "Graphs",
    algorithms: [
      { id: "depth-first-search", name: "Depth First Search", status: "ready" },
      {
        id: "breadth-first-search",
        name: "Breadth First Search",
        status: "ready",
      },
      {
        id: "dijkstra-algorithm",
        name: "Dijkstra's Algorithm",
        status: "ready",
      },
    ],
  },
  {
    id: "sorting",
    name: "Sorting & Searching",
    algorithms: [
      { id: "quick-sort", name: "Quick Sort", status: "ready" },
      { id: "merge-sort", name: "Merge Sort", status: "ready" },
      { id: "binary-search", name: "Binary Search", status: "soon" },
    ],
  },
  {
    id: "dynamic-programming",
    name: "Dynamic Programming",
    algorithms: [
      { id: "fibonacci-sequence", name: "Fibonacci Sequence", status: "soon" },
      { id: "0-1-knapsack", name: "0/1 Knapsack", status: "ready" },
      {
        id: "longest-common-subsequence",
        name: "Longest Common Subsequence",
        status: "ready",
      },
    ],
  },
];

export function LeftSidebar({
  isOpen,
  selectedAlgorithm,
  onSelectAlgorithm,
}: LeftSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "arrays",
  ]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Mobile Overlay */}
      <div className="lg:hidden fixed inset-0 bg-black/50 z-30" />

      {/* Sidebar */}
      <aside className="fixed lg:relative inset-y-0 left-0 z-40 w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Topics
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-500 mt-1">
            Select an algorithm to learn
          </p>
        </div>

        <ScrollArea className="flex-1">
          <nav className="p-2">
            {categories.map((category) => {
              const isExpanded = expandedCategories.includes(category.id);

              return (
                <CategorySection
                  key={category.id}
                  category={category}
                  isExpanded={isExpanded}
                  onToggle={() => toggleCategory(category.id)}
                  selectedAlgorithm={selectedAlgorithm}
                  onSelectAlgorithm={onSelectAlgorithm}
                />
              );
            })}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}

interface CategorySectionProps {
  category: Category;
  isExpanded: boolean;
  onToggle: () => void;
  selectedAlgorithm: string;
  onSelectAlgorithm: (id: string) => void;
}

function CategorySection({
  category,
  isExpanded,
  onToggle,
  selectedAlgorithm,
  onSelectAlgorithm,
}: CategorySectionProps) {
  return (
    <div className="mb-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-2 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors"
      >
        <span className="font-medium">{category.name}</span>
        <ChevronRight
          className={`size-4 transition-transform ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <div className="ml-2 mt-1 space-y-0.5">
          {category.algorithms.map((algorithm) => (
            <AlgorithmItem
              key={algorithm.id}
              algorithm={algorithm}
              isSelected={selectedAlgorithm === algorithm.id}
              onSelect={() => onSelectAlgorithm(algorithm.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface AlgorithmItemProps {
  algorithm: Algorithm;
  isSelected: boolean;
  onSelect: () => void;
}

function AlgorithmItem({
  algorithm,
  isSelected,
  onSelect,
}: AlgorithmItemProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
        isSelected
          ? "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20"
          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
      }`}
    >
      <span>{algorithm.name}</span>
      {algorithm.status === "soon" && (
        <Clock className="size-3 text-zinc-400 dark:text-zinc-600" />
      )}
    </button>
  );
}
