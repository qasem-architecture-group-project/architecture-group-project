import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const question = req.body.question;

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(question),
      temperature: 0.8,
      max_tokens: 900,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(question) {
  return `
  Question/Answer Bank:
  "
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
  "
  Act as a tutor for a college level computer architecture class. 
  Answer the question directly, do not address the student.
  Give a detailed answer to the following question:
 ${question}
 
 Answer the question with the following example format:
 "What does the valid bit in cache metadata signify?\n
 Whether the data in cache is valid or not.\n
 Explanation:\n ..."
 `;
}
