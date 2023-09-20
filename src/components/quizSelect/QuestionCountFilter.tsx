interface QuestionCountFilterProps {
  quizCount: number;
  setQuizCount: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionCountFilter = ({
  quizCount,
  setQuizCount,
}: QuestionCountFilterProps) => {
  function handleCountChange() {
    if (quizCount === 5) {
      setQuizCount(7);
    } else if (quizCount === 7) {
      setQuizCount(5);
    }
  }

  return (
    <div className="countFilter">
      <div className="fiter-title">
        <h1>Question per topic?</h1>
      </div>
      <div className="count-option-selector">
        <button
          className="count-option-toggler"
          onClick={() => handleCountChange()}
        >
          <h1>{quizCount}</h1>
          <h1>Toggle</h1>
        </button>
      </div>
    </div>
  );
};

export default QuestionCountFilter;
