import { useState } from "react";
import QuizData from "../../data/QuizData.json";

const Options = () => {
  const [topics, setTopics] = useState("");
  const quizTopics = {...QuizData}

  function handleClick() {
    
  }

  return (
    <div className="options">
      <div className="option">
        <div className="optionTile"></div>
        <div className="optionSelector">
          <div>
            <h1>Start</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
