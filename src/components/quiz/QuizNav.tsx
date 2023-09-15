import { SetStateAction } from "react";

interface QuizNavProps {
    setSelectedTopic:  React.Dispatch<SetStateAction<undefined>>;
}

const QuizNav = ({setSelectedTopic}: QuizNavProps) => {
    function handleBackClick(){
        setSelectedTopic(undefined)
    }
  return (
    <div className="paper-header">
      <div className="quiz-title">
        <h1>Team social quiz</h1>
      </div>
      <div className="quiz-nav">
        <button className="quit-equiz" onClick={()=> handleBackClick()}>Back</button>
      </div>
    </div>
  );
};

export default QuizNav;
