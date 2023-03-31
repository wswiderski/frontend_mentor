import { FC } from "react";
import Figures from "../model/figures";
import styles from "./Figure.module.scss";

const Figure: FC<{ figure: Figures }> = ({ figure }) => {
  return (
    <div className={styles.container}>
      <img src={`assets/${figure}.svg`} alt={`Figure: ${figure}`} />
    </div>
  );
};

export default Figure;
