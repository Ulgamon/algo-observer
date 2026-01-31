import { ArrowRight, BookOpen, Play, Code2, Zap, GitBranch, BarChart3, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HomePageProps {
  onSelectAlgorithm: (id: string) => void;
  onSectionChange: (section: string) => void;
}

export function HomePage({ onSelectAlgorithm, onSectionChange }: HomePageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="mb-6">
          <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full text-sm text-blue-700 dark:text-blue-400 mb-6">
            Interactive Learning Platform
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-zinc-100">
            Master Algorithms Through Visualization
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Algo.Observer is a comprehensive learning platform designed to help you understand data structures 
            and algorithms through interactive visualizations, detailed explanations, and practical code examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => onSelectAlgorithm('intro-arrays')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button 
              onClick={() => onSectionChange('Algorithms')}
              variant="outline"
              className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Browse All Topics
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickStartCard
            icon={<BookOpen className="size-6 text-blue-600 dark:text-blue-500" />}
            step="1"
            title="Choose Your Topic"
            description="Browse through categories like Arrays, Trees, Graphs, Sorting, and Dynamic Programming in the sidebar."
          />
          <QuickStartCard
            icon={<Code2 className="size-6 text-green-600 dark:text-green-500" />}
            step="2"
            title="Read & Learn"
            description="Study detailed explanations covering theory, complexity analysis, and step-by-step breakdowns."
          />
          <QuickStartCard
            icon={<Play className="size-6 text-purple-600 dark:text-purple-500" />}
            step="3"
            title="Visualize"
            description="Run interactive visualizations to see algorithms in action and solidify your understanding."
          />
        </div>
      </section>

      {/* Featured Topics */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Featured Topics</h2>
          <Button 
            variant="ghost" 
            onClick={() => onSectionChange('Algorithms')}
            className="text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10"
          >
            View all
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AlgorithmCard
            icon={<BarChart3 className="size-5 text-orange-600 dark:text-orange-500" />}
            title="Depth First Search"
            description="Learn graph traversal techniques and explore DFS applications in finding paths and detecting cycles."
            difficulty="Intermediate"
            timeComplexity="O(V + E)"
            onClick={() => onSelectAlgorithm('depth-first-search')}
          />
          <AlgorithmCard
            icon={<Zap className="size-5 text-yellow-600 dark:text-yellow-500" />}
            title="Quick Sort"
            description="Master the divide-and-conquer sorting algorithm with efficient partitioning strategies."
            difficulty="Intermediate"
            timeComplexity="O(n log n)"
            onClick={() => onSelectAlgorithm('quick-sort')}
          />
          <AlgorithmCard
            icon={<GitBranch className="size-5 text-green-600 dark:text-green-500" />}
            title="Binary Search Tree"
            description="Understand hierarchical data organization and efficient search, insert, and delete operations."
            difficulty="Intermediate"
            timeComplexity="O(log n)"
            onClick={() => onSelectAlgorithm('binary-search-tree')}
          />
          <AlgorithmCard
            icon={<Code2 className="size-5 text-blue-600 dark:text-blue-500" />}
            title="Dynamic Programming"
            description="Solve complex problems by breaking them down into simpler subproblems with memoization."
            difficulty="Advanced"
            timeComplexity="Varies"
            onClick={() => onSelectAlgorithm('0-1-knapsack')}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">How Algo.Observer Works</h2>
        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 md:p-8">
          <div className="space-y-6">
            <Feature
              title="Structured Learning Path"
              description="Content is organized from fundamentals to advanced topics, allowing you to build knowledge progressively. Start with basic data structures and work your way up to complex algorithms."
            />
            <Feature
              title="Theory Meets Practice"
              description="Each algorithm includes theoretical explanations, complexity analysis, pseudocode, and working code examples in multiple programming languages."
            />
            <Feature
              title="Visual Understanding"
              description="Interactive visualizations let you step through algorithms, observe state changes, and understand how data is manipulated at each stage of execution."
            />
            <Feature
              title="Real-World Context"
              description="Learn when and why to use each algorithm with practical use cases, common applications, and performance trade-offs."
            />
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">Curriculum Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CurriculumCard
            title="Data Structures"
            topics={[
              'Arrays & Strings',
              'Linked Lists',
              'Stacks & Queues',
              'Trees & Graphs',
              'Hash Tables',
              'Heaps & Priority Queues'
            ]}
            onClick={() => onSectionChange('Data Structures')}
          />
          <CurriculumCard
            title="Core Algorithms"
            topics={[
              'Sorting & Searching',
              'Recursion & Backtracking',
              'Dynamic Programming',
              'Greedy Algorithms',
              'Graph Algorithms',
              'String Algorithms'
            ]}
            onClick={() => onSectionChange('Algorithms')}
          />
        </div>
      </section>

      {/* Recent Updates */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">Recent Additions</h2>
        <div className="space-y-3">
          <UpdateItem
            title="Dijkstra's Algorithm"
            description="Find the shortest path between nodes in a weighted graph"
            date="Jan 2026"
            isNew
          />
          <UpdateItem
            title="Lowest Common Ancestor"
            description="Efficiently find the LCA of two nodes in a binary tree"
            date="Jan 2026"
            isNew
          />
          <UpdateItem
            title="Cycle Detection in Linked Lists"
            description="Detect cycles using Floyd's Tortoise and Hare algorithm"
            date="Dec 2025"
          />
          <UpdateItem
            title="0/1 Knapsack Problem"
            description="Solve optimization problems with dynamic programming"
            date="Dec 2025"
          />
        </div>
      </section>

      {/* Getting Started Footer */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
            Ready to Start Learning?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Choose a topic from the sidebar or start with our recommended beginner path.
          </p>
          <Button 
            onClick={() => onSelectAlgorithm('intro-arrays')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Begin with Arrays & Strings
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

function QuickStartCard({ icon, step, title, description }: {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -top-3 -left-3 size-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-semibold text-sm shadow-lg">
        {step}
      </div>
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function AlgorithmCard({ icon, title, description, difficulty, timeComplexity, onClick }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  difficulty: string;
  timeComplexity: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-left group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
        </div>
        <ArrowRight className="size-4 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center gap-3 text-xs">
        <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
          {difficulty}
        </span>
        <span className="font-mono text-zinc-600 dark:text-zinc-500">{timeComplexity}</span>
      </div>
    </button>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <CheckCircle2 className="size-6 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5" />
      <div>
        <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CurriculumCard({ title, topics, onClick }: {
  title: string;
  topics: string[];
  onClick: () => void;
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
      <h3 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-100">{title}</h3>
      <ul className="space-y-2 mb-4">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
            {topic}
          </li>
        ))}
      </ul>
      <Button
        onClick={onClick}
        variant="ghost"
        className="w-full justify-between text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10"
      >
        Explore {title}
        <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}

function UpdateItem({ title, description, date, isNew }: {
  title: string;
  description: string;
  date: string;
  isNew?: boolean;
}) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{title}</h4>
          {isNew && (
            <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs rounded-full">
              New
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
      <span className="text-xs text-zinc-500 dark:text-zinc-500 whitespace-nowrap">{date}</span>
    </div>
  );
}
