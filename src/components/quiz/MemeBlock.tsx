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
  const [currentMeme, setCurrentMeme] = useState<string>("");
  const [grade, setGrade] = useState<string>("");

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
    // Determine the grade based on the score
    if (score <= 3) {
      setGrade("bad");
    } else if (score <= 6) {
      setGrade("good");
    } else {
      setGrade("amazing"); // Corrected the spelling of "amazing"
    }

    // Generate a random meme for the current grade
    const imageUrls = memes
      .filter((meme) => meme.category === grade)
      .map((meme) => meme.imageUrl);

    const index = Math.floor(Math.random() * imageUrls.length);

    setCurrentMeme(imageUrls[index]);
  }, [score, memes, grade]);

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
