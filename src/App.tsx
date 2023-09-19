import { useEffect, useState } from "react";
import axios from "axios";
import Register from "./pages/Register";
import QuizSelect from "./pages/QuizSelect";

import Stage from "./constants/Appstage";

import "./App.css";

function App() {
  const [page, setPage] = useState(Stage.register);

  useEffect(() => {
    axios.get(`http://localhost:3030/`).then((response) => {
      console.log("meme collection" + response.data);
    });
  });

  let Component = Register;
  switch (page) {
    case "register":
      Component = Register;
      break;
    case "topic":
      Component = QuizSelect;
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
