import { Program, Service, ImpactMetric, Testimonial, NavItem } from "@/types";

export const siteConfig = {
  name: "SV LearnLogic Pvt. Ltd.",
  legalName: "SV LearnLogic Private Limited",
  tagline: "Build Skills. Build Careers.",
  subTagline: "Learn • Logic • Lead",
  description:
    "SV LearnLogic Pvt. Ltd. is a technology-focused education and corporate learning solutions enterprise bridging academic curricula with real-world industry demands through structured, practical, and mentor-led training.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://svlearnlogic.com",
  ogImage: "/images/og-image.png",
  logo: "/images/logo.png",

  // Verified Official Contact Details
  contact: {
    officialEmail: process.env.NEXT_PUBLIC_OFFICIAL_EMAIL || "svlearnlogic@gmail.com",
    businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "svsuhanalearnlogic@gmail.com",
    officialPhone: process.env.NEXT_PUBLIC_OFFICIAL_PHONE || "+91 9356172197",
    officialPhoneFormatted: "+91 93561 72197",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919356172197",
    whatsappLink: "https://wa.me/919356172197?text=Hello%20SV%20LearnLogic%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20technical%20programs%20and%20institutional%20solutions.",
    addressLine1: "Corporate Center: Tech Corridor, Pune / Maharashtra, India",
    addressLine2: "Operations & Delivery Across Pan-India Hubs",
    supportHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  },

  // Social Channels
  social: {
    linkedin: "https://www.linkedin.com/company/sv-learnlogic",
    twitter: "https://twitter.com/svlearnlogic",
    github: "https://github.com/svlearnlogic",
    youtube: "https://youtube.com/@svlearnlogic",
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Programs",
      href: "/programs",
      children: [
        {
          label: "Java Full Stack Development",
          href: "/programs/java-full-stack",
          description: "Enterprise Spring Boot, Microservices, React & Full-Stack architecture",
          badge: "Enterprise",
        },
        {
          label: "Java Data Structures & Algorithms",
          href: "/programs/java-dsa",
          description: "17-core algorithmic patterns, interview problem-solving & optimization",
          badge: "Popular",
        },
        {
          label: "Python Data Structures & Algorithms",
          href: "/programs/python-dsa",
          description: "Modern algorithmic thinking, Pythonic structures & coding rounds",
          badge: "Core",
        },
        {
          label: "Data Science",
          href: "/programs/data-science",
          description: "Python, Pandas, EDA, Statistical Modeling, Machine Learning & SQL",
          badge: "In Demand",
        },
        {
          label: "Generative AI (GenAI)",
          href: "/programs/generative-ai",
          description: "LLMs, Prompt Engineering, RAG architectures, LangChain & Autonomous Agents",
          badge: "Next-Gen",
        },
      ],
    },
    {
      label: "Solutions",
      href: "/solutions/colleges",
      children: [
        {
          label: "Colleges & Universities",
          href: "/solutions/colleges",
          description: "Campus placement training, FDPs, hackathons and institutional upskilling",
        },
        {
          label: "Corporate Training",
          href: "/solutions/corporate",
          description: "Customized technical upskilling, tech stack transitions and bootcamps",
        },
      ],
    },
    { label: "Services", href: "/services" },
    { label: "LMS", href: "/lms" },
    { label: "Contact Us", href: "/contact" },
  ] as NavItem[],
};

// 5 Flagship Programs Detailed Data
export const flagshipPrograms: Program[] = [
  {
    id: "java-full-stack",
    slug: "java-full-stack",
    title: "Java Full Stack Development",
    shortTitle: "Java Full Stack",
    tagline: "Architect robust enterprise applications from database to cloud-native frontend.",
    category: "Full Stack",
    duration: "Configurable / Batch-Specific (Typically 16–20 Weeks Intensive)",
    level: "Comprehensive",
    format: "Interactive Live + Guided Projects",
    badge: "Enterprise Flagship",
    shortDescription:
      "Master enterprise Java engineering from Core OOP to Spring Boot Microservices, RESTful APIs, MySQL, and modern React user interfaces.",
    longDescription:
      "The Java Full Stack Development program at SV LearnLogic is meticulously crafted to produce production-ready software engineers. Covering end-to-end web architecture, students transition from object-oriented foundation principles to developing resilient microservices, relational database schemas, and reactive frontend client applications.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    topics: [
      "Core Java",
      "Object-Oriented Programming (OOP)",
      "Collections Framework",
      "Exception Handling",
      "JDBC (Java Database Connectivity)",
      "Hibernate ORM",
      "Spring Framework Core",
      "Spring Boot 3",
      "RESTful APIs Architecture",
      "Microservices Fundamentals",
      "MySQL Database Design & Indexing",
      "HTML5 & Semantic Markup",
      "CSS3 & Responsive Design",
      "Modern JavaScript (ES6+)",
      "React.js Component Architecture",
      "Full Stack Capstone Projects",
      "Git, GitHub & Collaborative Workflows",
    ],
    prerequisites: [
      "Basic programming curiosity and analytical mindset",
      "Familiarity with standard computer operations",
      "No prior enterprise framework experience required",
    ],
    learningOutcomes: [
      "Design and deploy production-ready RESTful microservices with Spring Boot",
      "Build dynamic, reactive user interfaces with modern React, hooks, and state management",
      "Design normalized relational database schemas with Hibernate JPA and MySQL",
      "Implement secure authentication and role-based authorization using Spring Security",
      "Practice industry-standard Git version control, branching strategies, and CI/CD basics",
    ],
    skillsDeveloped: [
      "Spring Boot 3 & Spring MVC",
      "React.js & Front-End Routing",
      "Hibernate & Spring Data JPA",
      "Microservices & API Gateway",
      "Database Optimization & SQL",
      "Clean Code & SOLID Design",
    ],
    targetAudience: [
      "Computer Science & Engineering undergraduates seeking core software development roles",
      "Fresh graduates aiming for Tier-1 IT product and services recruitment",
      "Working professionals transitioning to Java Backend or Full Stack profiles",
    ],
    careerOpportunities: [
      "Java Full Stack Developer",
      "Java Backend Engineer",
      "Software Development Engineer (SDE-1)",
      "Spring Boot Microservices Developer",
      "Enterprise Application Consultant",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "Foundation & Core Java Mastery",
        description: "Deep dive into JVM internals, memory management, OOP paradigms, and robust exception architectures.",
        topics: [
          "JVM, JRE, and JDK Internal Mechanics",
          "OOP: Polymorphism, Inheritance, Encapsulation, Abstraction",
          "Generics and Java Collections Framework (List, Set, Map)",
          "Robust Exception Handling and Custom Exceptions",
          "File I/O, Serialization, and Multithreading Basics",
        ],
        handsOnLab: "Build an in-memory transactional banking and ledger simulation with thread synchronization.",
      },
      {
        moduleNumber: 2,
        title: "Relational Persistence: SQL, JDBC & Hibernate",
        description: "Designing database architectures and mapping object graphs to relational tables efficiently.",
        topics: [
          "Relational Database Modeling with MySQL",
          "Complex Queries, Joins, Triggers, and Indexing",
          "JDBC Architecture and Prepared Statements",
          "Hibernate ORM, Entity Lifecycle, and JPQL",
          "One-to-Many, Many-to-Many Relationships and Caching",
        ],
        handsOnLab: "Develop an Inventory & Order Management persistence layer with transaction rollbacks.",
      },
      {
        moduleNumber: 3,
        title: "Backend Microservices with Spring Boot",
        description: "Creating enterprise web APIs with dependency injection, automated testing, and modular architecture.",
        topics: [
          "Inversion of Control (IoC) & Dependency Injection",
          "Spring Boot Auto-Configuration & Starters",
          "REST API Design Principles & HTTP Status Handlers",
          "Spring Data JPA & Repository Pattern",
          "Microservices Concepts: Service Discovery & API Gateway",
        ],
        handsOnLab: "Construct an authenticated Healthcare Appointment Booking REST API with JWT security.",
      },
      {
        moduleNumber: 4,
        title: "Frontend Engineering with React & Modern Web",
        description: "Crafting fluid, responsive, and component-driven user interfaces connected to backend APIs.",
        topics: [
          "HTML5, CSS3, Flexbox, and Modern Grid Systems",
          "Modern JavaScript: Promises, Async/Await, and Modules",
          "React Architecture: JSX, Components, and Props",
          "React Hooks (useState, useEffect, useMemo, custom hooks)",
          "Axios/Fetch API Integration & Client-Side Routing",
        ],
        handsOnLab: "Develop an interactive Learning Portal dashboard consuming Spring Boot endpoints.",
      },
      {
        moduleNumber: 5,
        title: "Full Stack Capstone Project & DevOps Delivery",
        description: "Unifying backend, frontend, database, and version control into an end-to-end production deployment.",
        topics: [
          "End-to-End System Integration & CORS Security",
          "Git Version Control, GitFlow, and PR Reviews",
          "Docker Containerization Fundamentals",
          "Environment Configurations & Cloud Deployment Basics",
        ],
        handsOnLab: "Complete deployment of a multi-tier E-Commerce platform with payment webhook simulation.",
      },
    ],
    realWorldProjects: [
      {
        title: "Enterprise Multi-Vendor Logistics Platform",
        description: "A distributed system handling package tracking, courier assignments, and automated invoice generation.",
        technologies: ["Java 17", "Spring Boot", "Hibernate", "React", "MySQL", "Docker"],
        impact: "Simulates high-concurrency order intake with sub-50ms API response latency.",
      },
      {
        title: "Smart Campus Academic & Placement Portal",
        description: "An institutional platform managing student credentials, interview drives, and dynamic resume screening.",
        technologies: ["Spring Security", "JWT", "Spring Data JPA", "React", "Tailwind CSS"],
        impact: "Implements strict role-based access control (Student, Faculty, Recruiter).",
      },
    ],
    practicalAssignments: [
      "Building a custom Thread-Safe Queue using Java Concurrency utilities",
      "Designing a zero-leak database connection pool via HikariCP and JDBC",
      "Writing automated integration tests for Spring Boot endpoints with Mockito",
      "Creating reusable UI compound components with React and custom hooks",
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners with basic C or Python knowledge?",
        answer: "Yes. The curriculum begins with Core Java foundations and object-oriented principles before advancing to Spring Boot and React architectures.",
      },
      {
        question: "What kind of projects will I build?",
        answer: "You will build production-grade projects including an enterprise appointment reservation system and a full-stack logistics or e-commerce platform.",
      },
      {
        question: "How are batch schedules and durations managed?",
        answer: "Batch schedules, class timings, and duration formats are organized per student cohorts and institutional requirements. Details are provided upon enquiry.",
      },
    ],
  },
  {
    id: "java-dsa",
    slug: "java-dsa",
    title: "Java Data Structures & Algorithms",
    shortTitle: "Java DSA",
    tagline: "Master algorithmic problem-solving and conquer product-company coding interviews.",
    category: "DSA",
    duration: "Configurable / Cohort-Based (Typically 12–16 Weeks)",
    level: "Intermediate to Advanced",
    format: "Hands-on Bootcamp",
    badge: "Interview Accelerator",
    shortDescription:
      "A comprehensive algorithmic mastery program covering 17 core topic areas from Big-O complexity to Dynamic Programming and Graph algorithms.",
    longDescription:
      "The Java Data Structures & Algorithms curriculum at SV LearnLogic is engineered to transform students into analytical problem-solvers capable of dissecting complex computational challenges. Moving beyond rote memorization, this program instills deep pattern recognition across arrays, trees, dynamic programming, and graph structures.",
    heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    topics: [
      "Java Fundamentals for Problem Solving",
      "Time and Space Complexity (Asymptotic Analysis)",
      "Arrays & Two-Pointer Techniques",
      "Strings & Sliding Window Paradigms",
      "Searching and Sorting Algorithms",
      "Recursion & Backtracking Deep-Dive",
      "Linked Lists (Singly, Doubly, Circular)",
      "Stacks and Queues (Monotonic Stacks & Deque)",
      "Hashing & Collision Resolution Techniques",
      "Trees & Binary Tree Traversals",
      "Binary Search Trees (BST) & Self-Balancing Concepts",
      "Heaps & Priority Queues",
      "Graphs (BFS, DFS, Dijkstra, Topo Sort)",
      "Greedy Algorithms & Interval Scheduling",
      "Dynamic Programming (1D, 2D, Knapsack, LCS)",
      "Interview Problem Solving Patterns",
      "Competitive Programming Fundamentals",
    ],
    prerequisites: [
      "Familiarity with foundational Java syntax, loops, and conditional structures",
      "Strong dedication to daily hands-on coding and analytical problem-solving",
    ],
    learningOutcomes: [
      "Analyze and optimize algorithm efficiency across Big-O time and auxiliary space constraints",
      "Identify 14+ recurring interview patterns such as Two Pointers, Sliding Window, and Topological Sort",
      "Tackle complex Dynamic Programming challenges with both Top-Down memoization and Bottom-Up tabulation",
      "Solve advanced Graph problems including shortest paths, cycle detection, and minimum spanning trees",
      "Confidently navigate live coding interviews at leading product and technology enterprises",
    ],
    skillsDeveloped: [
      "Asymptotic Big-O Analysis",
      "Pattern Recognition in Code",
      "Optimal Memory Utilization",
      "Recursion Tree Visualization",
      "Graph Traversal & DAGs",
      "Interview Live-Coding Acumen",
    ],
    targetAudience: [
      "Pre-final and final-year engineering students preparing for campus placement coding rounds",
      "Software developers seeking to clear technical rounds at Tier-1 product organizations",
      "Engineers wanting to solidify their computational foundation and problem-solving velocity",
    ],
    careerOpportunities: [
      "Software Development Engineer (SDE-1 / SDE-2)",
      "Algorithm Engineer",
      "Core Backend Developer",
      "Technical Systems Analyst",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "Asymptotic Foundations & Linear Structures",
        description: "Mastering time/space trade-offs, two pointers, sliding windows, and memory models.",
        topics: [
          "Asymptotic Notation: Worst, Best, and Average Case Complexity",
          "Space Complexity & Auxiliary Stack Allocation",
          "Array Manipulations, Prefix Sums, and Kadane's Algorithm",
          "Two-Pointer Technique & Sliding Window Optimization",
          "String Manipulation and In-Place Reversals",
        ],
        handsOnLab: "Implement LeetCode-style medium challenges on subarray sums and substring windows.",
      },
      {
        moduleNumber: 2,
        title: "Recursion, Backtracking & Core Pointers",
        description: "Conquering recursive decision trees, backtracking state resets, and pointer-linked chains.",
        topics: [
          "Recursion Tree Mechanics and Call Stack Unwinding",
          "Classic Backtracking: N-Queens, Sudoku, Subsets, and Permutations",
          "Singly, Doubly, and Circular Linked Lists",
          "Fast & Slow Pointer Technique (Floyd's Cycle Finding)",
          "In-Place Reversal of Linked Lists",
        ],
        handsOnLab: "Solve complex linked list merges and LRU Cache design with doubly linked lists.",
      },
      {
        moduleNumber: 3,
        title: "Hierarchical Structures: Trees & Heaps",
        description: "Deep exploration of non-linear tree traversals, BST invariants, and priority queues.",
        topics: [
          "Binary Tree Traversals (Pre, In, Post, Level-Order BFS)",
          "Binary Search Tree Validations, Inserts, and Deletions",
          "Lowest Common Ancestor (LCA) and Tree Diameters",
          "Min/Max Heap Properties & Heapify Operations",
          "Priority Queues for Top-K Elements and Median Finding",
        ],
        handsOnLab: "Construct an autocomplete prefix lookup and a continuous median stream calculator.",
      },
      {
        moduleNumber: 4,
        title: "Graph Theory & Network Traversals",
        description: "Representing graphs, exploring node connections, cycle detection, and shortest path weights.",
        topics: [
          "Adjacency Matrix vs. Adjacency List Representations",
          "Breadth-First Search (BFS) and Depth-First Search (DFS)",
          "Topological Sort (Kahn’s Algorithm & DFS)",
          "Shortest Path: Dijkstra’s and Bellman-Ford Algorithms",
          "Disjoint Set Union (DSU) and Kruskal's Minimum Spanning Tree",
        ],
        handsOnLab: "Build a flight connection routing engine with shortest transit duration.",
      },
      {
        moduleNumber: 5,
        title: "Dynamic Programming & Interview Mastery",
        description: "Unraveling overlapping subproblems, optimal substructure, and interview battle testing.",
        topics: [
          "Memoization (Top-Down) vs. Tabulation (Bottom-Up)",
          "1D DP: Climbing Stairs, House Robber, Coin Change",
          "2D DP: Longest Common Subsequence, Edit Distance, Knapsack",
          "Partition DP and DP on Trees",
          "Mock Live Coding Interviews & Time-Bound Strategy",
        ],
        handsOnLab: "Deliver 50+ timed curated interview problems across Amazon, Google, and Microsoft patterns.",
      },
    ],
    realWorldProjects: [
      {
        title: "In-Memory Key-Value Store with TTL & Eviction",
        description: "Designing a concurrent hash-map with custom hash buckets, collision handling, and LRU eviction policy.",
        technologies: ["Java", "Generics", "Concurrency", "Custom Doubly Linked List"],
        impact: "Achieves O(1) read/write lookups with memory-bounded capacity.",
      },
      {
        title: "Optimized Route Planner Engine",
        description: "A graph-based shortest path routing system using priority queues and Dijkstra's algorithm.",
        technologies: ["Java", "Graph Theory", "Min-Heap", "Adjacency Lists"],
        impact: "Processes 100,000+ nodes under 15ms calculation time.",
      },
    ],
    practicalAssignments: [
      "Implementing custom Dynamic Array and Stack with automated resizing",
      "Solving 100+ graded coding challenges across easy, medium, and hard tiers",
      "Performing Big-O profiling on multiple sorting implementations",
      "Designing a custom Trie data structure for fast search queries",
    ],
    faqs: [
      {
        question: "How does this course prepare me for campus placement tests?",
        answer: "Campus placement coding tests demand quick pattern identification and clean, bug-free implementations under strict time limits. We focus specifically on these patterns.",
      },
      {
        question: "Is prior knowledge of DSA required?",
        answer: "Basic syntax knowledge of Java is expected. We start data structures from scratch and steadily ramp up to advanced algorithms.",
      },
      {
        question: "Are mock interviews included?",
        answer: "Yes, structured mock coding interview sessions and code walkthroughs are incorporated throughout the curriculum.",
      },
    ],
  },
  {
    id: "python-dsa",
    slug: "python-dsa",
    title: "Python Data Structures & Algorithms",
    shortTitle: "Python DSA",
    tagline: "Harness the elegance of Python to solve complex algorithmic challenges with speed.",
    category: "DSA",
    duration: "Configurable / Cohort-Based (Typically 12–16 Weeks)",
    level: "Intermediate to Advanced",
    format: "Hands-on Bootcamp",
    badge: "Rapid Problem Solving",
    shortDescription:
      "A fast-paced, high-efficiency DSA curriculum designed around Pythonic data structures, competitive programming idioms, and coding interview patterns.",
    longDescription:
      "Python is one of the world's most popular languages for technical interviews due to its clean syntax and expressive standard library. SV LearnLogic's Python DSA program equips students with the computational intuition and structured methodology required to ace technical interviews at modern tech firms.",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    topics: [
      "Python Fundamentals for Technical Interviews",
      "Object-Oriented Programming in Python",
      "Python Collections (list, dict, set, deque, Counter, heapq)",
      "Arrays & Strings Manipulation",
      "Searching and Sorting Algorithms",
      "Recursion & State Management",
      "Linked Lists Implementation & Pointers",
      "Stacks and Queues (LifoQueue, deque)",
      "Hash Maps & Custom Hashing",
      "Trees & Binary Tree Traversal Patterns",
      "Heaps & Priority Queues with heapq",
      "Graphs (Adjacency Mappings, BFS, DFS)",
      "Greedy Algorithms & Interval Problems",
      "Dynamic Programming (Memoization with functools.lru_cache & Tabulation)",
      "Problem-Solving Techniques & Time Management",
      "Coding Interview Preparation & Complexity Verification",
    ],
    prerequisites: [
      "Foundational Python programming knowledge (loops, functions, lists)",
      "Enthusiasm for mathematical and algorithmic puzzle solving",
    ],
    learningOutcomes: [
      "Leverage Python's standard library (`collections`, `heapq`, `bisect`, `itertools`) effectively",
      "Design and implement core data structures from scratch without relying solely on built-ins",
      "Master memoized recursive approaches utilizing Python's `functools.cache` decorator",
      "Model and solve complex graph and network problems with adjacency dictionaries",
      "Develop rapid whiteboarding, live-coding, and edge-case testing fluency",
    ],
    skillsDeveloped: [
      "Pythonic Clean Code",
      "Standard Library Mastery",
      "Algorithmic Decomposition",
      "Edge Case Handling",
      "Dynamic Programming Patterns",
      "Interview Whiteboard Fluency",
    ],
    targetAudience: [
      "Students preparing for technology companies permitting Python in interview rounds",
      "Data science and AI aspirants looking to strengthen their algorithmic fundamentals",
      "Developers wanting to transition from other languages to Python for coding competitions",
    ],
    careerOpportunities: [
      "Python Software Engineer",
      "Backend Developer",
      "Data Engineer",
      "Technical Problem Solver",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "Pythonic Foundations & In-Built Mechanics",
        description: "Understanding time complexities of Python built-in operations and writing optimal code.",
        topics: [
          "Python Memory Model, Object References, and Mutability",
          "Time Complexities of List, Dict, Set, and Deque Operations",
          "Advanced Slicing, List Comprehensions, and Generator Expressions",
          "Two-Pointer Technique & Sliding Window on Sequences",
          "Bitwise Manipulations & Binary Representation",
        ],
        handsOnLab: "Benchmark internal speeds of Python collections and build custom generator pipelines.",
      },
      {
        moduleNumber: 2,
        title: "Custom Linear Structures & Stack-Queue Patterns",
        description: "Implementing linked lists, double-ended queues, and monotonic stack algorithms.",
        topics: [
          "Building Singly and Doubly Linked Lists in Python",
          "Cycle Detection with Two Pointers",
          "Monotonic Stack for Next Greater Element Problems",
          "Sliding Window Maximum with collections.deque",
        ],
        handsOnLab: "Build a custom Expression Evaluator supporting infix-to-postfix and parenthesis matching.",
      },
      {
        moduleNumber: 3,
        title: "Trees, Binary Search Trees & Heaps",
        description: "Exploring recursive tree traversals, tree construction, and heap priority patterns.",
        topics: [
          "Tree Representations and Depth-First Search (Pre/In/Post)",
          "Breadth-First Search using deque for Level-by-Level exploration",
          "BST Invariants, Lowest Common Ancestor, and Balancing Concepts",
          "The heapq Module and Custom Comparator Workarounds",
          "Kth Largest Element and Interval Merging Problems",
        ],
        handsOnLab: "Implement an algorithmic task scheduling system with priority ranking.",
      },
      {
        moduleNumber: 4,
        title: "Graphs, Greedy Methods & Topological Order",
        description: "Modeling interconnected states using dictionaries and solving network problems.",
        topics: [
          "Graph Representation via defaultdict and sets",
          "BFS for Shortest Path in Unweighted Graphs",
          "DFS for Cycle Detection and Connected Components",
          "Course Schedule & Topological Sort with In-Degree Arrays",
          "Greedy Interval Scheduling and Activity Selection",
        ],
        handsOnLab: "Construct a dependency build-order resolution graph for a multi-package system.",
      },
      {
        moduleNumber: 5,
        title: "Dynamic Programming & Coding Interview Drill",
        description: "From recursive brute-force to memoization and space-optimized tabulation.",
        topics: [
          "Top-Down DP with functools.lru_cache and Custom Dictionaries",
          "Bottom-Up Tabulation with Space Optimization",
          "Classic Problems: Coin Change, 0/1 Knapsack, Longest Increasing Subsequence",
          "Systematic Framework for Cracking 45-Minute Coding Rounds",
        ],
        handsOnLab: "Timed mock coding interview marathon with real-time peer code review.",
      },
    ],
    realWorldProjects: [
      {
        title: "Algorithmic Text Search & Spell Checker",
        description: "An efficient auto-correction tool using Trie structures and Levenshtein distance dynamic programming.",
        technologies: ["Python 3", "Trie", "Dynamic Programming", "Bit Manipulation"],
        impact: "Processes multi-million character text corpuses in under 100ms.",
      },
      {
        title: "Network Flow & Dependency Analyzer",
        description: "A graph-based module dependency analyzer detecting circular imports and critical paths.",
        technologies: ["Python", "Graph Algorithms", "Kahn's Algorithm", "DFS"],
        impact: "Prevents circular dependencies across enterprise monorepos.",
      },
    ],
    practicalAssignments: [
      "Custom implementation of a Hash Table with open addressing and quadratic probing",
      "Solving 100+ curated Python algorithmic problems across standard patterns",
      "Benchmarking Big-O runtime of recursive vs. iterative dynamic programming",
      "Designing a sliding-window rate limiter algorithm in pure Python",
    ],
    faqs: [
      {
        question: "Do top tech companies allow Python for coding interviews?",
        answer: "Yes, virtually all major global tech firms and high-growth startups permit Python for coding and problem-solving rounds.",
      },
      {
        question: "How does Python DSA compare to Java DSA?",
        answer: "Both cover identical algorithmic concepts and patterns. Python offers more concise syntax, allowing candidates to implement solutions with less boilerplate.",
      },
      {
        question: "Are problem-solving strategies taught from scratch?",
        answer: "Yes, we teach you how to read problem statements, identify hidden constraints, identify patterns, and systematically devise optimal solutions.",
      },
    ],
  },
  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science & Machine Learning",
    shortTitle: "Data Science",
    tagline: "Extract actionable intelligence from complex datasets with modern statistical learning.",
    category: "Data Science",
    duration: "Configurable / Cohort-Based (Typically 16–20 Weeks)",
    level: "Comprehensive",
    format: "Interactive Live + Guided Projects",
    badge: "High Growth",
    shortDescription:
      "A rigorous, project-backed Data Science program covering Python, Pandas, EDA, SQL analytics, statistical modeling, and Supervised/Unsupervised Machine Learning.",
    longDescription:
      "The Data Science curriculum at SV LearnLogic is designed to transform curious minds into analytical practitioners. Covering data wrangling, statistical inference, predictive modeling, and feature engineering, students gain the technical confidence to convert raw, unstructured information into business-impacting predictive models.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    topics: [
      "Python for Data Science Ecosystem",
      "Statistics and Probability Foundations",
      "NumPy for High-Performance Vectorized Computing",
      "Pandas for Data Manipulation & Cleaning",
      "Data Cleaning & Handling Missing Values",
      "Exploratory Data Analysis (EDA) Best Practices",
      "Data Visualization Techniques",
      "Matplotlib for Scientific Plotting",
      "Seaborn for Statistical Visualizations",
      "SQL for Data Analytics and Query Optimization",
      "Machine Learning Fundamentals",
      "Supervised Learning: Regression & Classification",
      "Unsupervised Learning: Clustering & Dimensionality Reduction",
      "Model Evaluation, Overfitting & Cross-Validation",
      "Feature Engineering & Selection",
      "Real-World Data Science End-to-End Projects",
    ],
    prerequisites: [
      "Foundational high-school mathematics (basic algebra and statistics)",
      "Basic programming exposure in any language (Python preferred)",
    ],
    learningOutcomes: [
      "Execute end-to-end Exploratory Data Analysis (EDA) on messy real-world datasets",
      "Perform high-performance data transformations using NumPy and Pandas vectorization",
      "Construct predictive Machine Learning models utilizing Scikit-Learn pipelines",
      "Write advanced SQL queries including Window Functions and CTEs for analytics",
      "Evaluate model performance accurately with precision, recall, ROC-AUC, and cross-validation",
    ],
    skillsDeveloped: [
      "NumPy & Pandas Wrangling",
      "Statistical Hypothesis Testing",
      "Scikit-Learn ML Pipelines",
      "Feature Engineering",
      "Advanced SQL Analytics",
      "Data Storytelling & Dashboards",
    ],
    targetAudience: [
      "Engineering and science graduates wanting to launch careers in analytics and data science",
      "Business and QA analysts looking to upgrade into predictive modeling and data engineering",
      "Software developers seeking to integrate data intelligence into their technical skillset",
    ],
    careerOpportunities: [
      "Data Scientist",
      "Associate Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Engineer",
      "Quantitative Analyst",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "Python Data Science Foundations & Vectorization",
        description: "Mastering the fundamental computational building blocks of data manipulation.",
        topics: [
          "Python Data Structures for Analytics: Lists, Tuples, Dicts, Comprehensions",
          "NumPy: N-Dimensional Arrays, Broadcasting, and Vectorized Operations",
          "Pandas Core: Series, DataFrames, Indexing, and Filtering",
          "Handling Missing Data, Imputation Techniques, and Outlier Detection",
          "String and DateTime Transformations in Pandas",
        ],
        handsOnLab: "Clean and normalize a noisy 100,000-row retail sales dataset with missing records.",
      },
      {
        moduleNumber: 2,
        title: "Statistical Inference & Exploratory Data Analysis",
        description: "Uncovering distributions, correlation matrices, and statistical significance.",
        topics: [
          "Descriptive Statistics: Central Tendency, Dispersion, and Skewness",
          "Probability Distributions: Normal, Binomial, and Poisson",
          "Hypothesis Testing: T-Tests, Chi-Square, and ANOVA",
          "Matplotlib & Seaborn: Histograms, Heatmaps, Boxplots, and Pairplots",
          "Structured EDA Frameworks for Business Datasets",
        ],
        handsOnLab: "Conduct a comprehensive EDA on healthcare diagnostic data to identify risk markers.",
      },
      {
        moduleNumber: 3,
        title: "SQL for Analytics & Database Querying",
        description: "Extracting and aggregating business metrics directly from relational databases.",
        topics: [
          "Relational Database Fundamentals & Schema Queries",
          "Filtering, Aggregations, Grouping, and Having Clauses",
          "Complex Multi-Table Joins (Inner, Left, Full, Self)",
          "Window Functions: ROW_NUMBER, RANK, DENSE_RANK, NTILE, LEAD/LAG",
          "Common Table Expressions (CTEs) & Subqueries",
        ],
        handsOnLab: "Author analytical queries calculating customer cohort retention and churn rates.",
      },
      {
        moduleNumber: 4,
        title: "Supervised Machine Learning: Regression & Classification",
        description: "Training predictive models to estimate continuous values and categorize classes.",
        topics: [
          "The Machine Learning Lifecycle and Train-Test Splitting",
          "Linear Regression, Polynomial Regression, and Regularization (L1/L2)",
          "Logistic Regression for Binary and Multi-Class Classification",
          "Decision Trees, Random Forests, and Ensemble Learning",
          "Model Evaluation Metrics: MAE, RMSE, Precision, Recall, F1, and ROC-AUC",
        ],
        handsOnLab: "Build an end-to-end loan credit default risk prediction model with Scikit-Learn.",
      },
      {
        moduleNumber: 5,
        title: "Unsupervised Learning, Pipelines & Capstone Delivery",
        description: "Discovering hidden segments and packaging models into reproducible pipelines.",
        topics: [
          "K-Means Clustering and Determining Optimal K (Elbow & Silhouette)",
          "Principal Component Analysis (PCA) for Dimensionality Reduction",
          "Scikit-Learn Pipelines: Imputers, Scalers, and Estimators",
          "Model Serialization with Joblib and REST API Inference Preview",
        ],
        handsOnLab: "Deploy a customer segmentation and product recommendation engine.",
      },
    ],
    realWorldProjects: [
      {
        title: "Predictive Customer Churn & Lifetime Value Engine",
        description: "A machine learning pipeline predicting subscription cancellation risk and ranking key churn drivers.",
        technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "XGBoost Concepts"],
        impact: "Identifies at-risk customers with an 88% ROC-AUC evaluation score.",
      },
      {
        title: "Real Estate Market Price Valuation System",
        description: "A multi-variable regression model analyzing housing features, geospatial markers, and macro trends.",
        technologies: ["Python", "NumPy", "Scikit-Learn", "SQL", "Matplotlib"],
        impact: "Produces accurate property pricing valuations with minimal mean squared error.",
      },
    ],
    practicalAssignments: [
      "Conducting univariate and bivariate analysis on a financial transactions dataset",
      "Writing 25+ advanced analytical SQL queries using window partitions",
      "Building a custom Scikit-Learn transformer for automated feature engineering",
      "Performing hyperparameter tuning with GridSearchCV on ensemble models",
    ],
    faqs: [
      {
        question: "Do I need a strong advanced mathematics background to enroll?",
        answer: "Basic comfort with high-school algebra and statistics is sufficient. We build intuition for calculus, probability, and linear algebra progressively.",
      },
      {
        question: "Does the course cover both theoretical intuition and coding?",
        answer: "Yes, every theoretical mathematical concept is accompanied by hands-on implementation in Python notebooks using real-world datasets.",
      },
      {
        question: "Are real-world business datasets used during the program?",
        answer: "Yes, assignments and capstones utilize genuine open-source and simulated corporate datasets across finance, healthcare, and e-commerce.",
      },
    ],
  },
  {
    id: "generative-ai",
    slug: "generative-ai",
    title: "Generative AI & Agentic Systems",
    shortTitle: "Generative AI",
    tagline: "Build autonomous AI agents, production RAG pipelines, and intelligent applications.",
    category: "Generative AI",
    duration: "Configurable / Cohort-Based (Typically 12–16 Weeks)",
    level: "Intermediate to Advanced",
    format: "Industry-Grade Lab",
    badge: "Next-Gen AI",
    shortDescription:
      "A cutting-edge program covering LLMs, Prompt Engineering, OpenAI APIs, Vector Databases, RAG architectures, LangChain, and Autonomous AI Agents.",
    longDescription:
      "Generative AI is redefining modern software engineering and enterprise automation. SV LearnLogic's Generative AI program prepares developers to lead this technological frontier. Learn how to architect Retrieval-Augmented Generation (RAG) systems, orchestrate autonomous multi-agent workflows, embed proprietary enterprise knowledge, and deploy scalable AI-driven software.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    topics: [
      "Introduction to Artificial Intelligence & Modern Deep Learning Paradigms",
      "Generative AI Fundamentals & Transformer Architecture Overview",
      "Python for AI & Async Programming",
      "Advanced Prompt Engineering & Chain-of-Thought",
      "Large Language Models (LLMs): Foundational vs. Fine-Tuned",
      "LLM APIs & Cloud Model Providers",
      "OpenAI API Integration (Chat, Function Calling, Structured Outputs)",
      "Embeddings & Vector Representations of Data",
      "Vector Databases (Pinecone, ChromaDB, PGVector)",
      "Retrieval Augmented Generation (RAG) Architectures",
      "LangChain Framework (Chains, Runnables, LCEL)",
      "AI Agents: Tool Use, Memory, and Decision Loops (ReAct)",
      "Agentic AI Fundamentals & Multi-Agent Collaboration",
      "Building Production AI Applications",
      "Deployment, Observability & Security of GenAI Projects",
    ],
    prerequisites: [
      "Working knowledge of Python (functions, object-oriented concepts, API calls)",
      "Basic familiarity with JSON, REST APIs, and command-line environments",
    ],
    learningOutcomes: [
      "Master API integration with leading foundation models including OpenAI, Anthropic, and open-source models",
      "Design advanced Retrieval-Augmented Generation (RAG) systems with semantic chunking and re-ranking",
      "Store, index, and query high-dimensional embeddings using modern vector databases",
      "Build autonomous AI agents capable of planning, invoking external tools, and executing multi-step workflows",
      "Implement security safeguards, prompt injection defense, and output validation in production AI apps",
    ],
    skillsDeveloped: [
      "OpenAI API & Function Calling",
      "LangChain & LCEL Orchestration",
      "Vector Search & Hybrid Retrieval",
      "RAG Architecture & Chunking",
      "ReAct Agentic Workflows",
      "AI Safety & Evaluation Metrics",
    ],
    targetAudience: [
      "Software developers seeking to integrate LLMs and autonomous intelligence into enterprise software",
      "Tech leads and architects designing next-generation generative AI products",
      "Graduates wanting to stand out with verified, cutting-edge AI implementation capabilities",
    ],
    careerOpportunities: [
      "Generative AI Engineer",
      "AI Application Developer",
      "LLM Solutions Architect",
      "AI Agent Systems Specialist",
      "Cognitive Solutions Engineer",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "GenAI Foundations & Prompt Architecture",
        description: "Understanding tokenization, attention mechanisms, and prompt optimization strategies.",
        topics: [
          "Evolution from Machine Learning to Generative Pre-Trained Transformers",
          "Tokens, Context Windows, Temperature, and Sampling Parameters",
          "Zero-Shot, Few-Shot, and Chain-of-Thought (CoT) Prompting",
          "System Instructions, Guardrails, and Structured JSON Outputs",
          "Python Async Workflows for High-Throughput Model Queries",
        ],
        handsOnLab: "Build an automated prompt evaluation harness testing model responses across varied parameters.",
      },
      {
        moduleNumber: 2,
        title: "LLM APIs & Structured Tool Calling",
        description: "Integrating LLMs into programmatic workflows with schema validation.",
        topics: [
          "OpenAI API Mechanics: Chat Completions, Audio, and Vision",
          "Function Calling & Tool Invocation with Pydantic Schemas",
          "Structured Outputs with Guaranteed JSON Formatting",
          "Streaming Responses to Web Frontends with Server-Sent Events",
        ],
        handsOnLab: "Develop an automated financial statement parser extracting tabular metrics into validated schemas.",
      },
      {
        moduleNumber: 3,
        title: "Embeddings, Vector DBs & RAG Architecture",
        description: "Enabling models to reason over private proprietary documents without fine-tuning.",
        topics: [
          "Dense Embeddings & Cosine Similarity Metrics",
          "Document Chunking Strategies (Fixed-size, Recursive, Semantic)",
          "Vector Databases: ChromaDB, Pinecone, and PGVector Setup",
          "Naive RAG vs. Advanced RAG (Query Expansion, Re-ranking, Context Compression)",
          "Evaluating RAG Quality: Faithfulness, Answer Relevance, and Context Recall",
        ],
        handsOnLab: "Construct an Enterprise Knowledge Assistant answering questions from internal company policy PDFs.",
      },
      {
        moduleNumber: 4,
        title: "Orchestration with LangChain & LCEL",
        description: "Composing complex chains, persistent memory, and modular pipelines.",
        topics: [
          "LangChain Expression Language (LCEL) and Component Composition",
          "Prompt Templates, Model Wrappers, and Output Parsers",
          "Conversation Memory Management Strategies",
          "Document Loaders and Vector Store Retrievers",
        ],
        handsOnLab: "Build an interactive multi-turn customer support bot with contextual long-term memory.",
      },
      {
        moduleNumber: 5,
        title: "Autonomous AI Agents & Production Deployment",
        description: "Designing self-directing agents with tools, reflection, and guardrails.",
        topics: [
          "The ReAct (Reasoning + Acting) Paradigm",
          "Equipping Agents with Tools: Web Search, Calculators, SQL Querying, and Custom APIs",
          "Multi-Agent Collaboration: Manager-Worker and Critic Patterns",
          "AI Safety: Guardrails against Prompt Injection and Data Leakage",
          "Packaging and Serving AI Apps with FastAPI and Docker",
        ],
        handsOnLab: "Create an autonomous Market Research Agent that searches the web, summarizes articles, and writes a synthesized executive report.",
      },
    ],
    realWorldProjects: [
      {
        title: "Enterprise Document Intelligence RAG Engine",
        description: "A secure, private documentation query engine with hybrid keyword-vector search, semantic chunking, and source citation.",
        technologies: ["Python", "OpenAI Embeddings", "ChromaDB", "LangChain", "FastAPI"],
        impact: "Reduces employee document lookup times from 30 minutes to under 5 seconds with verified citations.",
      },
      {
        title: "Autonomous Developer Assistant Agent",
        description: "An agentic system capable of reading GitHub issue descriptions, searching codebases, and drafting pull requests.",
        technologies: ["Agentic AI", "ReAct Framework", "Tool Calling", "Vector DB", "Python"],
        impact: "Demonstrates autonomous planning, error recovery, and iterative multi-step reasoning.",
      },
    ],
    practicalAssignments: [
      "Benchmarking different embedding models and chunk size trade-offs",
      "Building a custom LangChain LCEL chain with fallback error handling",
      "Writing a secure prompt sanitization firewall preventing system prompt leaks",
      "Developing a multi-agent debate simulation to reach consensus on technical decisions",
    ],
    faqs: [
      {
        question: "Do I need GPU hardware to follow this course?",
        answer: "No. The course leverages hosted cloud API endpoints and lightweight vector databases running efficiently on standard laptops.",
      },
      {
        question: "Is this course about using AI tools, or building AI applications?",
        answer: "This is a serious software engineering program focused on building production AI applications, custom RAG pipelines, and autonomous agents through code.",
      },
      {
        question: "What frameworks are taught?",
        answer: "You will master modern industry tooling including OpenAI SDKs, LangChain, ChromaDB, vector search engines, and agentic orchestration architectures.",
      },
    ],
  },
];

// 10 Core Services Data
export const servicesList: Service[] = [
  {
    id: "technical-training",
    title: "Technical Training",
    description:
      "Structured, hands-on technical training programs in Java Full Stack, Data Structures & Algorithms, Data Science, and Generative AI engineered to prepare students for real-world engineering roles.",
    iconName: "Code2",
    targetAudience: "Students, Graduates, Career Transitioners",
    keyFeatures: [
      "Industry-aligned, updated curriculum",
      "Daily hands-on lab assignments",
      "Experienced technical practitioners",
      "Continuous assessment and code reviews",
    ],
    ctaText: "Explore Technical Training",
    ctaHref: "/programs",
  },
  {
    id: "corporate-training",
    title: "Corporate Training",
    description:
      "Targeted technical upskilling and workforce transformation solutions for enterprise teams, software service companies, and high-growth technology organizations.",
    iconName: "Building2",
    targetAudience: "Enterprises, Tech Startups, IT Teams",
    keyFeatures: [
      "Customized curriculum aligned to project stacks",
      "Role-specific competency development",
      "Flexible delivery: On-premise, virtual, or hybrid",
      "Measurable pre- and post-training benchmarks",
    ],
    ctaText: "Discuss Corporate Upskilling",
    ctaHref: "/solutions/corporate",
  },
  {
    id: "campus-placement-preparation",
    title: "Campus Placement Preparation",
    description:
      "Comprehensive placement readiness initiatives covering algorithmic problem solving, core computer science subjects, system design basics, and technical mock interviews.",
    iconName: "GraduationCap",
    targetAudience: "Engineering Colleges & Universities",
    keyFeatures: [
      "DSA & competitive coding bootcamps",
      "Technical interview pattern drills",
      "Aptitude & analytical problem solving",
      "Resume review and GitHub portfolio mentorship",
    ],
    ctaText: "Partner for Campus Readiness",
    ctaHref: "/solutions/colleges",
  },
  {
    id: "internship-programs",
    title: "Internship Programs",
    description:
      "Immersive project-based internships where students collaborate on simulated production codebases under the guidance of experienced mentors.",
    iconName: "Laptop",
    targetAudience: "Pre-Final & Final Year Students",
    keyFeatures: [
      "Real-world software development lifecycle",
      "Sprint planning and agile methodology",
      "Code reviews and version control rigor",
      "Verified internship experience documentation",
    ],
    ctaText: "Discover Internships",
    ctaHref: "/contact?type=internship",
  },
  {
    id: "faculty-development-programs",
    title: "Faculty Development Programs (FDPs)",
    description:
      "Empowering academic faculty and department heads with the latest industry technologies, modern development stacks, and emerging paradigms such as GenAI and Data Science.",
    iconName: "Users",
    targetAudience: "Professors, Lecturers, Academic Institutions",
    keyFeatures: [
      "Emerging technology exposure (GenAI, LLMs, Microservices)",
      "Industry best practices and developer workflows",
      "Interactive lab teaching methodologies",
      "Collaborative academic-industry curriculum design",
    ],
    ctaText: "Schedule an FDP",
    ctaHref: "/solutions/colleges#fdp",
  },
  {
    id: "technical-workshops",
    title: "Technical Workshops",
    description:
      "High-impact, intensive short-format workshops focused on specific modern technologies such as OpenAI APIs, Docker containerization, Spring Boot microservices, or Vector DBs.",
    iconName: "Zap",
    targetAudience: "Colleges, Student Chapters, Tech Communities",
    keyFeatures: [
      "1 to 3-day deep-dive format",
      "100% practical, project-driven agenda",
      "Immediate deployable skills",
      "Interactive Q&A and architecture teardowns",
    ],
    ctaText: "Request a Workshop",
    ctaHref: "/contact?type=workshop",
  },
  {
    id: "bootcamps",
    title: "Technical Bootcamps",
    description:
      "Fast-paced, high-intensity immersive coding bootcamps designed to achieve rapid skill acceleration over concentrated learning periods.",
    iconName: "Terminal",
    targetAudience: "Students, Career Switchers, Cohorts",
    keyFeatures: [
      "Concentrated learning sprints",
      "Live daily problem-solving competitions",
      "Mentor-guided lab hours",
      "Milestone-based capstone projects",
    ],
    ctaText: "Explore Bootcamps",
    ctaHref: "/programs",
  },
  {
    id: "lms-solutions",
    title: "LMS Solutions (SV LearnLogic LMS Advance)",
    description:
      "State-of-the-art Learning Management System technology tailored for educational institutions, corporate training divisions, and learning administrators.",
    iconName: "MonitorCheck",
    targetAudience: "Universities, Training Institutes, Enterprises",
    keyFeatures: [
      "Modular course content delivery",
      "Student performance tracking and analytics",
      "Automated code assessment readiness",
      "Role-based multi-tenant management",
    ],
    ctaText: "Explore LMS Advance",
    ctaHref: "/lms",
  },
  {
    id: "project-based-learning",
    title: "Project-Based Learning",
    description:
      "Pedagogy centered on building real-world software applications rather than memorizing syntax, ensuring deep conceptual clarity and portfolio readiness.",
    iconName: "Layers",
    targetAudience: "All Technical Learners",
    keyFeatures: [
      "Industry-simulated project briefs",
      "Architecture design before implementation",
      "Clean code standards and unit testing",
      "Showcase-worthy GitHub repositories",
    ],
    ctaText: "Learn Our Approach",
    ctaHref: "/about#philosophy",
  },
  {
    id: "academic-industry-skill-development",
    title: "Academic & Industry Skill Development",
    description:
      "Strategic institutional initiatives bridging the gap between standard university syllabi and the dynamic, evolving expectations of global technology employers.",
    iconName: "Compass",
    targetAudience: "University Leadership, Deans, Academic Councils",
    keyFeatures: [
      "Curriculum alignment consultations",
      "Industry guest sessions and tech talks",
      "Hackathons and coding challenges",
      "Sustained institutional skill roadmaps",
    ],
    ctaText: "Partner With Us",
    ctaHref: "/solutions/colleges",
  },
];

// Value Pillars for Homepage
export const valuePillars = [
  {
    id: "industry-oriented",
    title: "Industry-Oriented Learning",
    description:
      "Curricula meticulously benchmarked against modern technology industry standards, discarding outdated theory in favor of modern enterprise frameworks and engineering practices.",
    iconName: "Workflow",
  },
  {
    id: "practical-skill",
    title: "Practical Skill Development",
    description:
      "A hands-on, code-first pedagogy where learners build real-world microservices, train predictive models, and implement algorithmic data structures in guided laboratory environments.",
    iconName: "Cpu",
  },
  {
    id: "career-focused",
    title: "Career-Focused Training",
    description:
      "Targeted preparation for technical recruitment rounds, coding tests, and live engineering interviews designed to foster lasting professional confidence and career acceleration.",
    iconName: "Target",
  },
];

// Why Choose SV LearnLogic Points
export const whyChoosePoints = [
  {
    title: "Practical Learning Approach",
    description:
      "Every module pairs core conceptual theory with active programming, ensuring learners write, test, and debug code from day one.",
  },
  {
    title: "Industry-Relevant Curriculum",
    description:
      "Syllabi continuously updated to reflect modern industry stacks: Spring Boot 3, modern React, modern Python, LLMs, and Vector Databases.",
  },
  {
    title: "Experienced Technical Mentors",
    description:
      "Programs designed and mentored by passionate technology educators with deep practical software development experience.",
  },
  {
    title: "Project-Based Learning",
    description:
      "Learners build functional, showcase-ready software systems rather than basic toy scripts, fostering genuine technical portfolios.",
  },
  {
    title: "Structured Learning Paths",
    description:
      "Clear, step-by-step milestones that guide candidates logically from baseline computer concepts to advanced system architectures.",
  },
  {
    title: "Career-Focused Development",
    description:
      "Rigorous emphasis on technical interview problem solving, algorithmic efficiency, clean code conventions, and engineering communication.",
  },
  {
    title: "Institution and Corporate Engagement",
    description:
      "Proven frameworks for collaborating with colleges, universities, and corporate enterprises to deliver large-scale skill transformation.",
  },
];

// Configurable Impact Metrics (transparent placeholders)
export const impactMetrics: ImpactMetric[] = [
  {
    id: "students",
    label: "Students & Learners Mentored",
    value: "1,500+",
    subtext: "Across Technical Cohorts & Bootcamps",
    isPlaceholder: true,
  },
  {
    id: "institutions",
    label: "Institutional Engagements",
    value: "25+",
    subtext: "Colleges & University Collaborations",
    isPlaceholder: true,
  },
  {
    id: "programs-delivered",
    label: "Programs & Bootcamps Delivered",
    value: "50+",
    subtext: "In Full Stack, DSA, AI & Data Science",
    isPlaceholder: true,
  },
  {
    id: "corporate",
    label: "Corporate Training Hours",
    value: "400+",
    subtext: "Customized Enterprise Upskilling",
    isPlaceholder: true,
  },
];

// Testimonials (clearly labeled as sample placeholders)
export const sampleTestimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "The practical emphasis in the Java Full Stack program gave me genuine confidence in building Spring Boot microservices and React frontends. The structured curriculum made all the difference.",
    author: "Sample Student Profile",
    role: "Computer Science Graduate",
    organization: "Engineering College Partner",
    program: "Java Full Stack Development",
    isPlaceholder: true,
  },
  {
    id: "test-2",
    quote:
      "SV LearnLogic's DSA program dismantled the fear of algorithmic problem solving. The step-by-step progression through trees, graphs, and dynamic programming patterns was crystal clear.",
    author: "Sample Learner Profile",
    role: "Aspiring SDE",
    organization: "Placement Preparation Cohort",
    program: "Java DSA Program",
    isPlaceholder: true,
  },
  {
    id: "test-3",
    quote:
      "Partnering with SV LearnLogic for our campus placement technical bootcamp yielded remarkable engagement. The hands-on coding tests and mentor feedback prepared our graduates effectively.",
    author: "Sample Academic Representative",
    role: "Dean of Training & Placement",
    organization: "Affiliated Technical University",
    program: "Institutional Placement Solution",
    isPlaceholder: true,
  },
];

// Corporate 5-Stage Process
export const corporateEngagementSteps = [
  {
    step: "01",
    title: "Understand Training Requirements",
    description: "In-depth discovery session to assess team objectives, target tech stacks, and delivery timelines.",
  },
  {
    step: "02",
    title: "Identify Skill Gaps",
    description: "Diagnostic pre-assessments and role-mapping to pinpoint exact competency baselines across participants.",
  },
  {
    step: "03",
    title: "Design a Learning Program",
    description: "Customized, modular curriculum crafted specifically for the organization's business use cases.",
  },
  {
    step: "04",
    title: "Deliver Technical Training",
    description: "Interactive, lab-first instruction led by senior practitioners with daily coding exercises.",
  },
  {
    step: "05",
    title: "Evaluate Learning Outcomes",
    description: "Post-training capstone reviews, milestone scores, and actionable competency reports for leadership.",
  },
];
