import { SetStateAction, useState } from "react";

import Header from "../components/quizSelect/SelectHeader";
import Options from "../components/quizSelect/Option";
import QuizData from "../data/QuizData.json";
import QuestionCountFilter from "../components/quizSelect/QuestionCountFilter";
import Quiz from "./Quiz";

import "../styles/QuizSelect.css";

const QuizSelect = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  //state to controll the number of questions per quiz
  const [quizCount, setQuizCount] = useState(5);

  const newQuizData = [...QuizData];
  const categories = newQuizData.map((quiz) => quiz.Category);

  function HandleOnSelect(category: SetStateAction<undefined>) {
    setSelectedTopic(category);
  }

  return (
    <>
      {!selectedTopic ? (
        <div className="SelectContainer">
          <div className="selector">
            <Header />
            <QuestionCountFilter
              quizCount={quizCount}
              setQuizCount={setQuizCount}
            />
            <Options categories={categories} handleOnselect={HandleOnSelect} />
          </div>
        </div>
      ) : (
        <Quiz
          quizCount={quizCount}
          setSelectedTopic={setSelectedTopic}
          selectedTopic={selectedTopic}
          quizData={newQuizData}
        />
      )}
    </>
  );
};

export default QuizSelect;
