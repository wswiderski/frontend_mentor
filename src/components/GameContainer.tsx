import GameBoard from "./GameBoard";
import Header from "./Header";

const GameContainer = () => {
  return (
    <div>
      <Header></Header>
      <GameBoard></GameBoard>
      <button>RULES</button>
    </div>
  );
};

export default GameContainer;
