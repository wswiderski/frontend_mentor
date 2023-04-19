import { FC } from "react";
import styles from "./TopItem.module.scss";

export interface TopItemProps {
  number: string;
  imageSrc: string;
  topic: string;
  description: string;
}

const TopItem: FC<TopItemProps> = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.imageSrc} alt="Article image" />

      <div>
        <span>{props.number}</span>
        <a>{props.topic}</a>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default TopItem;
