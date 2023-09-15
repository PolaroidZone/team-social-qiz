interface QuizDocProps {
  filterQuestions: {
    question: string;
    answers: answer[];
  }[];
  currentQuestion: number;
  handleAnswerClick: (selectedAnswer: string, isCorrect: boolean) => void;
  score: number;
}

type answer = {
  text: string;
  correct: boolean;
};

const QuizDoc = ({
  score,
  filterQuestions,
  currentQuestion,
  handleAnswerClick,
}: QuizDocProps) => {
  const question = filterQuestions[currentQuestion];

  if (!question) {
    // Display feedback when all questions have been answered
    return (
      <div className="quiz">
        <h1>Quiz Completed</h1>
        <p>Your Score: {score}</p>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="questions">
        <h1 className="question">{question.question}</h1>
      </div>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <div
            key={index}
            className="answer"
            onClick={() => handleAnswerClick(answer.text, answer.correct)}
          >
            <h1>{answer.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDoc;
