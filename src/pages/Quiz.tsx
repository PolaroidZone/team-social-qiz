import "../styles/Quiz.css";

const Quiz = () => {
  return (
    <div>
      <div className="paper-header">
        <div className="quiz-title">
          <h1>Team social quiz</h1>
        </div>
        <div className="quiz-nav">
          <button className="quit-equiz">Back</button>
        </div>
      </div>
      <div className="quiz-container">
        <div className="quiz-paper">
          <div className="paper">
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
            <div className="quiz">
              <div className="questions">
                <h1 className="question">
                  How many movies are there in the MCU?
                </h1>
              </div>
              <div className="answers">
                <div className="answer">
                  <h1>1.</h1>
                </div>
                <div className="answer">
                  <h1>2.</h1>
                </div>
                <div className="answer">
                  <h1>3.</h1>
                </div>
                <div className="answer">
                  <h1>4.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
