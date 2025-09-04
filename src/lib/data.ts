export type SidebarLinkData = {
  to: string;
  name: string;
};

export type SidebarListData = {
  title: string;
  elements: SidebarLinkData[];
};

export const sidebarData: SidebarListData[] = [
  {
    title: "Arrays & Strings",
    elements: [
      { to: "/arrays/introduction", name: "Introduction to Arrays" },
      { to: "/arrays/two-sum", name: "Two Sum Problem" },
      { to: "/strings/reverse-string", name: "Reverse String" },
    ],
  },
  {
    title: "Linked Lists",
    elements: [
      { to: "/linked-lists/singly", name: "Singly Linked List" },
      { to: "/linked-lists/doubly", name: "Doubly Linked List" },
      { to: "/linked-lists/cycle-detection", name: "Cycle Detection" },
    ],
  },
  {
    title: "Stacks & Queues",
    elements: [
      { to: "/stacks/implementation", name: "Stack Implementation" },
      { to: "/stacks/valid-parentheses", name: "Valid Parentheses" },
      { to: "/queues/queue-using-stacks", name: "Queue Using Stacks" },
    ],
  },
  {
    title: "Trees",
    elements: [
      { to: "/trees/binary-tree-traversal", name: "Binary Tree Traversal" },
      { to: "/trees/binary-search-tree", name: "Binary Search Tree" },
      { to: "/trees/lowest-common-ancestor", name: "Lowest Common Ancestor" },
    ],
  },
  {
    title: "Graphs",
    elements: [
      { to: "/graphs/dfs", name: "Depth First Search" },
      { to: "/graphs/bfs", name: "Breadth First Search" },
      { to: "/graphs/dijkstra", name: "Dijkstra's Algorithm" },
    ],
  },
  {
    title: "Sorting & Searching",
    elements: [
      { to: "/sorting/quick-sort", name: "Quick Sort" },
      { to: "/sorting/merge-sort", name: "Merge Sort" },
      { to: "/searching/binary-search", name: "Binary Search" },
    ],
  },
  {
    title: "Dynamic Programming",
    elements: [
      { to: "/dp/fibonacci", name: "Fibonacci Sequence" },
      { to: "/dp/knapsack", name: "0/1 Knapsack" },
      {
        to: "/dp/longest-common-subsequence",
        name: "Longest Common Subsequence",
      },
    ],
  },
];
