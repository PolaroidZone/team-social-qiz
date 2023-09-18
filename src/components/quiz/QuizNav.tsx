import { SetStateAction, useState } from "react";
import axios from "axios";

interface QuizNavProps {
  setSelectedTopic: React.Dispatch<SetStateAction<undefined>>;
}

const QuizNav = ({ setSelectedTopic }: QuizNavProps) => {
  const [memes, setMemes] = useState([]);

  axios({
    method: "get",
    url: "http://localhost:8000/memes",
    responseType: "json",
  }).then((response) => {
    setMemes(response.data);
  });

  function handleBackClick() {
    setSelectedTopic(undefined);
  }

  return (
    <div className="paper-header">
      <div className="quiz-title">
        <h1>Team social quiz</h1>
      </div>
      <div className="quiz-nav">
        <button className="quit-equiz" onClick={() => handleBackClick()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default QuizNav;
