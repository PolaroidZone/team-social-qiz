import axios from "axios";
import { useEffect, useState } from "react";

interface MemeBlockProps {
  score: number;
}
const MemeBlock = ({ score }: MemeBlockProps) => {
  return (
    <div className="quiz">
      <h1>Quiz Completed</h1>
      <p>Your Score: {score}</p>
    </div>
  );
};

export default MemeBlock;
