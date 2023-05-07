const cacheQuiz = [
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
];
export default cacheQuiz;
