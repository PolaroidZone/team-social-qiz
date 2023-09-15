import Header from "../components/quizSelect/SelectHeader";
import Options from "../components/quizSelect/Option";
import QuizData from "../data/QuizData.json";
import { useState } from "react";

import '../styles/QuizSelect.css'

const QuizSelect = () => {
  const [topics, setTopics] = useState(QuizData);

  return (
    <div className="SelectContainer">
      <div className="selector">
        <Header />
        <Options topics={topics}/>
      </div>
    </div>
  );
};

export default QuizSelect;
