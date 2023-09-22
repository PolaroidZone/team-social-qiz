import { SetStateAction, useState } from "react";

import QuizNav from "../components/quiz/QuizNav";
import QuizDoc from "../components/quiz/QuizDoc";
import QuizAside from "../components/quiz/QuizAside";

import "../styles/Quiz.css";
interface QuizProps {
  setSelectedTopic: React.Dispatch<SetStateAction<undefined>>;
  selectedTopic: string | undefined;
  quizData: {
    Category: string;
    questions: {
      question: string;
      answers: { text: string; correct: boolean }[];
    }[];
  }[];
}

const Quiz = ({ setSelectedTopic, selectedTopic, quizData }: QuizProps) => {
  // "0" is the default value for the score
  const [score, setScore] = useState(0);
  // "0" is the default value for the current question based on the arry index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const filterQuestions =
    quizData
      .find((quiz) => quiz.Category === selectedTopic)
      ?.questions.map((question) => ({
        question: question.question,
        answers: question.answers, // Assuming 'answers' is an array of answer objects
      })) || [];

  const totalQuestions = filterQuestions.length;

  return (
    <>
      <QuizNav setSelectedTopic={setSelectedTopic} />
      <div className="quiz-container">
        <div className="quiz-paper">
          <div className="paper">
            <QuizAside
              currentQuestion={currentQuestion}
              totalQuestion={totalQuestions}
            />
            <QuizDoc
              score={score}
              filterQuestions={filterQuestions}
              currentQuestion={currentQuestion}
              setScore={setScore}
              setCurrentQuestion={setCurrentQuestion}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
