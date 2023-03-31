import Figures from "../model/figures";
import Figure from "./Figure";
import styles from "./GameBoard.module.scss";

const GameBoard = () => {
  return (
    <div className={styles.container}>
      <Figure figure={Figures.rock}></Figure>
      <Figure figure={Figures.rock}></Figure>
    </div>
  );
};

export default GameBoard;
