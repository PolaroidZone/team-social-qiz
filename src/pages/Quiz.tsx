import { SetStateAction, useState } from "react";

import QuizNav from "../components/quiz/QuizNav";
import QuizDoc from "../components/quiz/QuizDoc";
import QuizAside from "../components/quiz/QuizAside";

import "../styles/Quiz.css";
interface QuizProps {
  quizCount: number;
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

const Quiz = ({
  setSelectedTopic,
  selectedTopic,
  quizData,
  quizCount,
}: QuizProps) => {
  // "0" is the default value for the score
  const [score, setScore] = useState(0);
  // "0" is the default value for the current question based on the arry index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //update fiterQuestions to filter questions based on the selected topic and readomize the questions.
  const filterQuestions =
    quizData
      .find((quiz) => quiz.Category === selectedTopic)
      ?.questions.map((question) => ({
        question: question.question,
        answers: question.answers,
      })) || [];

  const shuffleQuestions = (questions: any[]) => {
    // i is the last index of the array
    let i = questions.length - 1;
    for (; i > 0; i--) {
      //j is a random number between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      //temp is a temporary variable to store the value of questions[i]
      const temp = questions[i];

      //swap questions[i] with questions[j]
      questions[i] = questions[j];

      //swap questions[j] with temp
      questions[j] = temp;
    }
    return questions;
  };

  return (
    <>
      {/* header */}
      <QuizNav setSelectedTopic={setSelectedTopic} />
      <div className="quiz-container">
        <div className="quiz-paper">
          <div className="paper">
            {/* aside */}
            <QuizAside
              currentQuestion={currentQuestion}
              totalQuestion={quizCount}
            />
            {/* quiz */}
            <QuizDoc
              score={score}
              filterQuestions={shuffleQuestions(filterQuestions)}
              currentQuestion={currentQuestion}
              setScore={setScore}
              setCurrentQuestion={setCurrentQuestion}
              quizCount={quizCount}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
