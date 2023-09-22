import MemeBlock from "./MemeBlock";

interface QuizDocProps {
  filterQuestions: {
    question: string;
    answers: answer[];
  }[];
  currentQuestion: number;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}

type answer = {
  text: string;
  correct: boolean;
};

const QuizDoc = ({
  score,
  setScore,
  setCurrentQuestion,
  filterQuestions,
  currentQuestion,
}: QuizDocProps) => {
  const question = filterQuestions[currentQuestion];

  const handleAnswerClick = (_selectedAnswer: string, isCorrect: boolean) => {
    // Move to the next question
    if (currentQuestion < filterQuestions.length ) {
      if (isCorrect) {
        // Increment the score if the selected answer is correct
        setScore(score + 1);
        //Increment the current question number
        setCurrentQuestion(currentQuestion + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Display feedback when all questions have been answered
      alert(`Quiz Completed. Your Score: ${score + 1}`);
    }
  };

  if (!question) {
    return (
      <MemeBlock score={score}/>
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
