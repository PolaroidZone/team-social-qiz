import { useState } from "react";
import Register from "./pages/Register";
import QuizSelect from "./pages/QuizSelect";
import Quiz from "./pages/Quiz";

import Stage from "./constants/Appstage";

import "./App.css";

function App() {
  const [page, setPage] = useState(Stage.quiz);

  let Component = Register;
  switch (page) {
    case "register":
      Component = Register;
      break;
    case "topic":
      Component = QuizSelect;
      break;
    case "quiz":
      Component = Quiz;
      break;
    default:
  }

  return (
    <div className="App">
      <Component setPage={setPage} />
    </div>
  );
}

export default App;
