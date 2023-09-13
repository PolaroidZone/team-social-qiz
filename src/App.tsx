import React, { useEffect, useState } from "react";
import Register from "./pages/Register";

import "./App.css";

function App() {
  const [page, setPage] = useState("register");
  const [user, setUser] = useState();

  let Component = Register;
  switch (page) {
    case "register":
      Component = Register;
      break;
    case "quiz":
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
