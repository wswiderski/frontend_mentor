import { FC } from "react";
import styles from "./NewsItem.module.scss";

export interface NewsItemProps {
  topic: string;
  description: string;
}

const NewsItem: FC<NewsItemProps> = (props) => {
  return (
    <div className={styles.item}>
      <a>{props.topic}</a>
      <p>{props.description}</p>
    </div>
  );
};

export default NewsItem;
