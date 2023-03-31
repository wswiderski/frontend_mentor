import { FC } from "react";
import styles from "./ScoreBox.module.scss";

const ScoreBox: FC<{ score: number }> = ({ score }) => {
  return (
    <div className={styles.container}>
      <span>SCORE</span>
      <span>{score}</span>
    </div>
  );
};

export default ScoreBox;
