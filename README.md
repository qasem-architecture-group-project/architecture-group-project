# CompArch Companion

Authors: Amy Brink, Victoria Jordan, Axell Martinez, Axel Sanchez Moreno

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


1. First, install the required dependencies:

```bash
npm install
# or
yarn install
```

2. Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Flashcards Overview

Each flashcard corresponds to a topic on a chapter covered in the course (both midterm and final content).

Above each card is a term where you first think of the meaning of each word. To view an answer, hover your mouse over the block to view the terminology of a word. The content will be uncovered once your mouse is not hovering over the block. 

** NOTE **: Since each flashcard is closely compact together, it’s best to place your mouse in the middle of the screen. If needed, you can hover over (or near) the header of the flashcard that the user would want to test their understanding on. 

## Linux Tutorial Overview 

The Linux Tutorial is a one-page tutorial that teaches students about what Linux is, how Linux can be applied in computer architecture, and how it will be used in class. 

The usage of the Linux tutorial is fairly simple. It’s one page with an index and labeled sections. 
1. What is Linux?
2. How do Linux and Computer Architecture relate?
3. What are the benefits of Linux?
4. How to access Linux?
5. x86 vs POWER8
6. Basics to Navigating Linux
7. How can I connect code samples from Git?
8. How can we build and execute code samples?
9. How can we measure performance?
Users are encouraged to use `ctrl+f` to access different sections on the page conveniently. Each section is either in a box or an oval. Ovals have general information about Linux and boxes that have the actual tutorial for the class. Tutorials also contain information to explain the tutorial further. 

## Quizzes Overview

1. Select a quiz type (e.g., Caches & Memory, Pipelining).
2. Answer the multiple-choice questions displayed on the screen.
3. Once the quiz is over, review your score.
4. Click the "View Incorrect Questions" button to see explanations for the questions you answered incorrectly.
5. Click the "Reset Quiz" button to start over with a new quiz.
