import Header from "../components/quizSelect/SelectHeader";
import Options from "../components/quizSelect/Option";

const QuizSelect = () => {
  return (
    <div className="SelectContainer">
      <div className="selector">
        <Header/>
        <Options/>
      </div>  
    </div>
  );
};

export default QuizSelect;
