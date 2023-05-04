import { useState } from "react";
import Score from "./Score";
import Game from "./Game";

const GameController = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <Score score={score}></Score>
      <Game></Game>
      <button>RULES</button>
    </>
  );
};

export default GameController;
