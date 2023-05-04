import { FC } from "react";
import logo from "../assets/logo.svg";
import styles from "./Score.module.scss";

interface ScoreProps {
  score: number;
}

const Score: FC<ScoreProps> = (props) => {
  return (
    <header className={styles.score}>
      <img src={logo} alt="Logo" />
      <span className={styles.filler} />
      <div>
        <span>SCORE</span>
        <span>{props.score}</span>
      </div>
    </header>
  );
};

export default Score;
