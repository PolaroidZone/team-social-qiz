import Header from "../components/quizSelect/SelectHeader";
import Options from "../components/quizSelect/Option";
import QuizData from "../data/QuizData.json";
import { SetStateAction, useState } from "react";

import "../styles/QuizSelect.css";
import Quiz from "./Quiz";

const QuizSelect = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  const [quizPage, setQuizPage] = useState(false);

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
          <Options categories={categories} handleOnselect={HandleOnSelect} />
        </div>
      </div>
    ) : (
      <Quiz setSelectedTopic={setSelectedTopic} quizData={newQuizData}/>
    )}
    </>
  );
};

export default QuizSelect;
