interface QuizAsideProps {
    score: number;
}

const QuizAside = ({score}: QuizAsideProps) => {
  return (
    <aside className="side-panel">
      <div className="user-details-con">
        <div className="user">
          <h1>User</h1>
        </div>
        <div className="user-progress">
          <div className="progress-container">
            <h1 className="progress-title">Progress:_</h1>
            <h1 className="current-question">1</h1>
            <h1 className="total-questions">/10</h1>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default QuizAside;
