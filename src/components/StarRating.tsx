import { FC } from "react";
import styles from "./StarRating.module.scss";

const StarRating: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        <img src="./images/icon-star.svg" alt="Star" />
        <img src="./images/icon-star.svg" alt="Star" />
        <img src="./images/icon-star.svg" alt="Star" />
        <img src="./images/icon-star.svg" alt="Star" />
        <img src="./images/icon-star.svg" alt="Star" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default StarRating;
