import { FC } from "react";
import styles from "./Detail.module.scss";

const Detail: FC<{ name: string; value: number; imgUrl: string }> = (props) => {
  let colorClass = "";
  if (props.name === "Reaction") {
    colorClass = styles.red;
  } else if (props.name === "Memory") {
    colorClass = styles.yellow;
  } else if (props.name === "Verbal") {
    colorClass = styles.green;
  } else {
    colorClass = styles.blue;
  }

  return (
    <div className={`${colorClass} ${styles.detail}`}>
      <img src={props.imgUrl} alt={`Result deatils image for ${props.name}`} />
      <span>{props.name}</span>
      <span className={styles.gap}></span>
      <span className={styles.value}>{props.value}</span>
      <span className={styles.adition}>/</span>
      <span className={styles.adition}>100</span>
    </div>
  );
};

export default Detail;
