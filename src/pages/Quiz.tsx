import { SetStateAction, useState } from "react";

import QuizNav from "../components/quiz/QuizNav";
import QuizDoc from "../components/quiz/QuizDoc";
import QuizAside from "../components/quiz/QuizAside";

import "../styles/Quiz.css";

interface QuizProps {
  setSelectedTopic:  React.Dispatch<SetStateAction<undefined>>;
  quizData: {};
}

const Quiz = ({ setSelectedTopic, quizData }: QuizProps) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);


  return (
    <>
      {/* header */}
      <QuizNav setSelectedTopic={setSelectedTopic}/>
      <div className="quiz-container">
        <div className="quiz-paper">
          <div className="paper">
            {/* aside */}
            <QuizAside score={score}/>
            {/* quiz */}
            <QuizDoc/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
