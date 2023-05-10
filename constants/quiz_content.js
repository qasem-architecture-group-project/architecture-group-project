export const cacheQuiz = [
  {
    question:
      "What is the name of the cache mapping technique that uses modulo-based placement to determine the index of a memory block in the cache?",
    answers: [
      { text: "Set-associative mapping" },
      { text: "Fully associative mapping" },
      { text: "Direct mapping", isCorrect: true },
      { text: "Indirect mapping" },
    ],
  },
  {
    question: "What is the purpose of a tag in cache metadata?",
    answers: [
      { text: "To indicate whether data is valid" },
      { text: "To uniquely identify a memory location", isCorrect: true },
      { text: "To determine the location of data in cache" },
      { text: "To store cache block information" },
    ],
  },
  {
    question: "What does the valid bit in cache metadata signify?",
    answers: [
      { text: "The location of data in cache" },
      { text: "Whether the data in cache is valid or not", isCorrect: true },
      { text: "The unique identifier for each cache block" },
      { text: " The memory address of the data" },
    ],
  },
  {
    question: "Which of the following is not stored in the cache?",
    answers: [
      { text: "Data" },
      { text: "Tag" },
      { text: "Valid bit" },
      { text: "Index", isCorrect: true },
    ],
  },
  {
    question:
      "In a modulo-based placement scheme with modulo 4, which of the following memory blocks will map to cache block 0?",
    answers: [
      { text: "0, 1, 2, 3" },
      { text: "0, 4, 8, 12", isCorrect: true },
      { text: "1, 5, 9, 13" },
      { text: "2, 6, 10, 14" },
    ],
  },
  {
    question:
      "What is the formula for calculating the index in a direct-mapped cache?",
    answers: [
      {
        text: "index = (memory address) mod (number of blocks in memory)",
      },
      {
        text: "index = (memory address) mod (number of blocks in cache)",
        isCorrect: true,
      },
      { text: "index = (tag) mod (number of blocks in cache)" },
      { text: "index = (tag) mod (number of blocks in memory)" },
    ],
  },
  {
    question: "What is the Miss Rate in the context of the memory hierarchy?",
    answers: [
      {
        text: "The fraction of memory accesses found in a level of the memory hierarchy",
      },
      {
        text: "The fraction of memory accesses not found in a level of the memory hierarchy",
        isCorrect: true,
      },
      {
        text: "The time to replace a block in cache with the corresponding block from a lower level",
      },
      { text: "The number of memory accesses that result in a cache miss" },
    ],
  },
  {
    question: "What is considered a high miss rate?",
    answers: [
      { text: "0.1%" },
      { text: "1%", isCorrect: true },
      { text: "5%" },
      { text: "10%" },
    ],
  },
  {
    question: "What are the three types of cache misses?",
    answers: [
      { text: "Compulsory, capacity, conflict", isCorrect: true },
      { text: "Cold, capacity, conflict" },
      { text: "Compulsory, hot, conflict" },
      { text: "Cold, warm, conflict" },
    ],
  },
  {
    question: "Which type of cache miss is most common?",
    answers: [
      { text: "Compulsory" },
      { text: "Capacity", isCorrect: true },
      { text: "Conflict" },
      { text: "Cold" },
    ],
  },
  {
    question: "How can spatial locality be exploited in cache?",
    answers: [
      { text: "By storing only single words in cache blocks" },
      { text: "By randomly selecting words to store in cache" },
      {
        text: "By storing consecutive words in memory together in cache blocks",
        isCorrect: true,
      },
      {
        text: "By ignoring spatial locality and focusing on temporal locality",
      },
    ],
  },
];

export const pipeliningQuiz = [
  // Existing questions
  // ...

  {
    question: "What is the purpose of pipelining in modern processors?",
    answers: [
      { text: "Reduce latency of a single task" },
      { text: "Increase throughput of entire workload", isCorrect: true },
      { text: "Minimize power consumption" },
      { text: "Decrease processor size" },
    ],
  },
  {
    question: "What is the main cause of unbalanced pipeline stages?",
    answers: [
      { text: "Lack of hazard detection" },
      { text: "Slowest pipeline stage", isCorrect: true },
      { text: "Incorrect instruction decoding" },
      { text: "Improper memory addressing" },
    ],
  },
  {
    question: "What are the three types of data hazards?",
    answers: [
      { text: "Structural, data, control", isCorrect: true },
      { text: "Functional, data, control" },
      { text: "Structural, logical, control" },
      { text: "Functional, logical, control" },
    ],
  },
  {
    question: "Which of the following best describes stalling?",
    answers: [
      { text: "Skips problematic instructions" },
      {
        text: "Pauses execution to resolve hazards, slowing the program",
        isCorrect: true,
      },
      { text: "Reschedules instructions for better performance" },
      { text: "Reorders pipeline stages for better efficiency" },
    ],
  },
  {
    question: "What is the purpose of forwarding in pipeline hazard handling?",
    answers: [
      { text: "To pause pipeline execution" },
      { text: "To reorder pipeline stages" },
      {
        text: "To pass data directly between stages without waiting for completion",
        isCorrect: true,
      },
      { text: "To increase the number of pipeline stages" },
    ],
  },
  {
    question:
      "Which type of forwarding involves data being passed from the memory output to the ALU?",
    answers: [
      { text: "ex-ex" },
      { text: "mem-ex", isCorrect: true },
      { text: "mem-mem" },
      { text: "ex-mem" },
    ],
  },
  {
    question: "What are the five stages of a classic RISC pipeline?",
    answers: [
      { text: "IF, ID, EX, MEM, WB", isCorrect: true },
      { text: "ID, IF, EX, MEM, WB" },
      { text: "IF, ID, MEM, EX, WB" },
      { text: "ID, IF, MEM, EX, WB" },
    ],
  },
  {
    question: "How does pipelining affect the clock cycle time?",
    answers: [
      { text: "Increases clock cycle time" },
      { text: "Decreases clock cycle time" },
      { text: "No effect on clock cycle time" },
      {
        text: "The length of a pipeline stage equals the clock cycle time",
        isCorrect: true,
      },
    ],
  },
  {
    question: "What is the potential speedup of a pipelined processor?",
    answers: [
      { text: "A CPI of 2 and fast CC" },
      { text: "A CPI of 0.5 and fast CC" },
      { text: "A CPI of 1 and fast CC", isCorrect: true },
      { text: "A CPI of 1 and slow CC" },
    ],
  },
  {
    question:
      "What is the main purpose of the Write Back (WB) stage in a pipeline?",
    answers: [
      { text: "Execute arithmetic instructions" },
      { text: "Decode instructions and read from register file" },
      { text: "Read/write data from/to the data memory" },
      { text: "Write result data into the register file", isCorrect: true },
    ],
  },
  {
    question: "What is the primary challenge when handling control hazards?",
    answers: [
      { text: "Resolving resource contention" },
      { text: "Ensuring data is ready for use" },
      {
        text: "Evaluating the branch condition before jumping to a new address",
        isCorrect: true,
      },
      { text: "Minimizing the impact of pipeline stalls" },
    ],
  },
];
