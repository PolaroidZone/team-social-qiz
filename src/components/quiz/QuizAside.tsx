interface QuizAsideProps {
    currentQuestion: number;
    totalQuestion: number;
}

const QuizAside = ({currentQuestion, totalQuestion}: QuizAsideProps) => {
  return (
    <aside className="side-panel">
      <div className="user-details-con">
        <div className="user">
          <h1>{localStorage.user}</h1>
        </div>
        <div className="user-progress">
          <div className="progress-container">
            <h1 className="progress-title">Progress:_</h1>
            <h1 className="current-question">{currentQuestion}</h1>
            <h1 className="total-questions">/{totalQuestion}</h1>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default QuizAside;
