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
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const filterQuestions =
    quizData
      .find((quiz) => quiz.Category === selectedTopic)
      ?.questions.map((question) => ({
        question: question.question,
        answers: question.answers, // Assuming 'answers' is an array of answer objects
      })) || [];

  return (
    <>
      {/* header */}
      <QuizNav setSelectedTopic={setSelectedTopic} />
      <div className="quiz-container">
        <div className="quiz-paper">
          <div className="paper">
            {/* aside */}
            <QuizAside score={score} />
            {/* quiz */}
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
