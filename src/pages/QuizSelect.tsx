import Header from "../components/quizSelect/SelectHeader";
import Options from "../components/quizSelect/Option";
import QuizData from "../data/QuizData.json";
import { SetStateAction, useState } from "react";
import axios from "axios";

import "../styles/QuizSelect.css";
import Quiz from "./Quiz";

const QuizSelect = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  const [memes, setMemes] = useState([]);

  const newQuizData = [...QuizData];
  const categories = newQuizData.map((quiz) => quiz.Category);

  function HandleOnSelect(category: SetStateAction<undefined>) {
    setSelectedTopic(category);
  }

  axios({
    method: "get",
    url: "http://localhost:8000/memes",
    responseType: "json",
  }).then((response) => {
    setMemes(response.data);
  });

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
      <Quiz setSelectedTopic={setSelectedTopic} selectedTopic={selectedTopic} quizData={newQuizData}/>
    )}
    </>
  );
};

export default QuizSelect;
