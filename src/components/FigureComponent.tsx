import { FC } from "react";
import { Figure } from "./Game";
import styles from "./FigureComponent.module.scss";

interface FigureProps {
  className: string;
  figure: Figure;
  onSelection: (figure: Figure) => void;
}

const getGackground = (figure: Figure): string => {
  switch (figure) {
    case Figure.Scissors:
      return styles.scissors;
    case Figure.Paper:
      return styles.paper;
    case Figure.Rock:
      return styles.rock;
    case Figure.Lizard:
      return styles.lizard;
    case Figure.Spock:
      return styles.spock;
  }
};

const FigureComponent: FC<FigureProps> = (props) => {
  const onSelectionHandler = () => {
    props.onSelection(props.figure);
  };

  return (
    <div
      onClick={onSelectionHandler}
      className={`${props.className} ${styles.figure} ${getGackground(
        props.figure
      )}`}
    ></div>
  );
};

export default FigureComponent;
