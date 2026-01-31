import { PlayCircle, BookOpen, Code, Lightbulb } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { HomePage } from '@/app/components/HomePage';
import { AlgorithmLesson } from '@/app/components/AlgorithmLesson';

interface MainContentProps {
  selectedAlgorithm: string;
  onSelectAlgorithm: (id: string) => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function MainContent({ selectedAlgorithm, onSelectAlgorithm, activeSection, onSectionChange }: MainContentProps) {
  // Show homepage when on Introduction section and no algorithm selected
  if (activeSection === 'Introduction' && !selectedAlgorithm) {
    return <HomePage onSelectAlgorithm={onSelectAlgorithm} onSectionChange={onSectionChange} />;
  }

  // Show algorithm lesson page when an algorithm is selected
  if (selectedAlgorithm) {
    return <AlgorithmLesson algorithmId={selectedAlgorithm} />;
  }

  // Show section-specific content when no algorithm is selected
  return <SectionOverview section={activeSection} onSelectAlgorithm={onSelectAlgorithm} />;
}

function SectionOverview({ section, onSelectAlgorithm }: { section: string; onSelectAlgorithm: (id: string) => void }) {
  const sectionData = getSectionData(section);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl mb-4 text-zinc-900 dark:text-zinc-100">{sectionData.title}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{sectionData.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {sectionData.topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => onSelectAlgorithm(topic.algorithmId)}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-left group"
          >
            <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
              {topic.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{topic.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function getSectionData(section: string) {
  const data: Record<string, any> = {
    'Data Structures': {
      title: 'Data Structures',
      description: 'Explore fundamental and advanced data structures that form the building blocks of efficient algorithms.',
      topics: [
        { name: 'Arrays & Strings', description: 'Contiguous memory storage and text manipulation', algorithmId: 'intro-arrays' },
        { name: 'Linked Lists', description: 'Dynamic data structures with pointer-based connections', algorithmId: 'singly-linked-list' },
        { name: 'Stacks & Queues', description: 'LIFO and FIFO data structures for ordered processing', algorithmId: 'stack-implementation' },
        { name: 'Trees', description: 'Hierarchical structures for organizing data', algorithmId: 'binary-tree-traversal' },
      ],
    },
    'Algorithms': {
      title: 'Algorithms',
      description: 'Master essential algorithms for searching, sorting, graph traversal, and optimization.',
      topics: [
        { name: 'Depth First Search', description: 'Explore graph nodes depth-wise', algorithmId: 'depth-first-search' },
        { name: 'Breadth First Search', description: 'Traverse graphs level by level', algorithmId: 'breadth-first-search' },
        { name: 'Quick Sort', description: 'Efficient divide-and-conquer sorting', algorithmId: 'quick-sort' },
        { name: 'Merge Sort', description: 'Stable sorting with guaranteed O(n log n)', algorithmId: 'merge-sort' },
      ],
    },
    'Visualizations': {
      title: 'Interactive Visualizations',
      description: 'See algorithms in action with step-by-step animations and interactive controls.',
      topics: [
        { name: 'Sorting Visualizations', description: 'Watch how different sorting algorithms work', algorithmId: 'quick-sort' },
        { name: 'Graph Traversals', description: 'Visualize DFS and BFS in action', algorithmId: 'depth-first-search' },
        { name: 'Tree Operations', description: 'Explore tree insertion and deletion', algorithmId: 'binary-search-tree' },
        { name: 'Dynamic Programming', description: 'See memoization and tabulation', algorithmId: '0-1-knapsack' },
      ],
    },
  };

  return data[section] || data['Data Structures'];
}

function getAlgorithmData(algorithmId: string) {
  const data: Record<string, any> = {
    'intro-arrays': {
      title: 'Introduction to Arrays',
      category: 'Arrays & Strings',
      description: 'Learn about arrays, one of the most fundamental data structures in computer science.',
      timeComplexity: 'O(1) access, O(n) search',
      spaceComplexity: 'O(n)',
      overview:
        'An array is a collection of elements stored at contiguous memory locations. It is one of the simplest and most widely used data structures. Arrays allow constant-time access to elements by index, making them highly efficient for scenarios where you need to frequently access elements by their position.',
      steps: [
        'Elements are stored in contiguous memory locations',
        'Each element can be accessed using its index',
        'Index starts at 0 and goes up to n-1 where n is the array length',
        'Accessing an element by index takes O(1) time',
      ],
      code: `function accessArray(arr, index) {
  // O(1) - Direct access by index
  return arr[index];
}

function searchArray(arr, target) {
  // O(n) - Must check each element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`,
      useCases: [
        'Storing and accessing elements by position',
        'Implementing other data structures (stacks, queues, etc.)',
        'Matrix operations and multi-dimensional data',
        'Lookup tables and caching',
      ],
    },
    'depth-first-search': {
      title: 'Depth First Search',
      category: 'Graphs',
      description: 'Explore graph traversal using depth-first search, a fundamental algorithm for exploring nodes and edges.',
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)',
      overview:
        'Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack (either explicitly or via recursion) to remember the path taken. DFS is useful for many graph problems including finding connected components, detecting cycles, and topological sorting.',
      steps: [
        'Start at a given node and mark it as visited',
        'Recursively visit all unvisited adjacent nodes',
        'Backtrack when no unvisited adjacent nodes remain',
        'Continue until all reachable nodes are visited',
      ],
      code: `function dfs(graph, start, visited = new Set()) {
  // Mark current node as visited
  visited.add(start);
  console.log(start);
  
  // Recursively visit all unvisited neighbors
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
  
  return visited;
}`,
      useCases: [
        'Finding connected components in a graph',
        'Detecting cycles in a graph',
        'Topological sorting',
        'Solving maze and puzzle problems',
        'Path finding between two nodes',
      ],
    },
  };

  return data[algorithmId] || data['intro-arrays'];
}