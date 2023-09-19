import axios from "axios";
import { useEffect, useState } from "react";

interface Meme {
  category: string;
  imageUrl: string;
}

interface MemeBlockProps {
  score: number;
}

const MemeBlock = ({ score }: MemeBlockProps) => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/memes")
      .then((response) => {
        const memesData: Meme[] = response.data.memes;
        setMemes(memesData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="quiz">
      <h1>Quiz Completed</h1>
      <p>Your Score: {score}</p>
      <ul>
        {memes.map((meme: Meme, index: number) => (
          <li key={index}>
            <h2>{meme.category}</h2>
            <img src={meme.imageUrl} alt={meme.category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemeBlock;
