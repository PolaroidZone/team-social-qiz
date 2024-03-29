import { useEffect, useState } from "react";
import axios from "axios";

interface Meme {
  category: string;
  imageUrl: string;
}

interface MemeBlockProps {
  score: number;
  quizCount: number;
}

const MemeBlock = ({ score, quizCount }: MemeBlockProps) => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [currentMeme, setCurrentMeme] = useState<string>("");
  const [grade, setGrade] = useState<string>("");

  const badGrade = (quizCount / 2) - 0.5;
  const goodGrade = (quizCount / 2) + 1.5;

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

  useEffect(() => {
    if (score <= badGrade) {
      setGrade("bad");
    } else if (score <= goodGrade) {
      setGrade("good");
    } else {
      setGrade("amazing");
    }

    // Generate a random meme for the current grade
    const imageUrls = memes
      .filter((meme) => meme.category === grade)
      .map((meme) => meme.imageUrl);

    const index = Math.floor(Math.random() * imageUrls.length);

    setCurrentMeme(imageUrls[index]);
  }, [score, memes, grade, badGrade, goodGrade]);

  return (
    <div className="quiz">
      <h1>Quiz Completed</h1>
      <p>Your Score: {score}</p>
      <p>Grade: {grade}</p>
      <div className="meme-container">
        <img className="meme" src={currentMeme} alt="meme" />
      </div>
    </div>
  );
};

export default MemeBlock;
