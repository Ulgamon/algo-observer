type ShowIndicator = "soon" | "new" | "old";

export type SidebarLinkData = {
  to: string;
  name: string;
  badge: ShowIndicator;
};

export type SidebarListData = {
  title: string;
  elements: SidebarLinkData[];
};

export const sidebarData: SidebarListData[] = [
  {
    title: "Arrays & Strings",
    elements: [
      {
        badge: "soon",
        to: "/arrays/introduction",
        name: "Introduction to Arrays",
      },
      { badge: "soon", to: "/arrays/two-sum", name: "Two Sum Problem" },
      { badge: "soon", to: "/strings/reverse-string", name: "Reverse String" },
    ],
  },
  {
    title: "Linked Lists",
    elements: [
      { badge: "soon", to: "/linked-lists/singly", name: "Singly Linked List" },
      { badge: "soon", to: "/linked-lists/doubly", name: "Doubly Linked List" },
      {
        badge: "soon",
        to: "/linked-lists/cycle-detection",
        name: "Cycle Detection",
      },
    ],
  },
  {
    title: "Stacks & Queues",
    elements: [
      {
        badge: "soon",
        to: "/stacks/implementation",
        name: "Stack Implementation",
      },
      {
        badge: "soon",
        to: "/stacks/valid-parentheses",
        name: "Valid Parentheses",
      },
      {
        badge: "soon",
        to: "/queues/queue-using-stacks",
        name: "Queue Using Stacks",
      },
    ],
  },
  {
    title: "Trees",
    elements: [
      {
        badge: "new",
        to: "/trees/binary-tree-traversal",
        name: "Binary Tree Traversal",
      },
      {
        badge: "new",
        to: "/trees/binary-search-tree",
        name: "Binary Search Tree",
      },
      {
        badge: "soon",
        to: "/trees/lowest-common-ancestor",
        name: "Lowest Common Ancestor",
      },
    ],
  },
  {
    title: "Graphs",
    elements: [
      { badge: "soon", to: "/graphs/dfs", name: "Depth First Search" },
      { badge: "soon", to: "/graphs/bfs", name: "Breadth First Search" },
      { badge: "soon", to: "/graphs/dijkstra", name: "Dijkstra's Algorithm" },
    ],
  },
  {
    title: "Sorting & Searching",
    elements: [
      { badge: "soon", to: "/sorting/quick-sort", name: "Quick Sort" },
      { badge: "soon", to: "/sorting/merge-sort", name: "Merge Sort" },
      { badge: "new", to: "/searching/binary-search", name: "Binary Search" },
    ],
  },
  {
    title: "Dynamic Programming",
    elements: [
      { badge: "new", to: "/dp/fibonacci", name: "Fibonacci Sequence" },
      { badge: "soon", to: "/dp/knapsack", name: "0/1 Knapsack" },
      {
        badge: "soon",
        to: "/dp/longest-common-subsequence",
        name: "Longest Common Subsequence",
      },
    ],
  },
];
