import { FC, useEffect, useState } from "react";
import styles from "./Game.module.scss";
import FigureComponent from "./FigureComponent";

import background from "../assets/bg-pentagon.svg";

interface GameProps {}

enum GameState {
  PlayerSelection,
  ComputerSelection,
  Result,
}

export enum Figure {
  Scissors,
  Paper,
  Rock,
  Lizard,
  Spock,
}

const Game: FC<GameProps> = (props) => {
  const [state, setState] = useState<GameState>(GameState.PlayerSelection);
  const [selection, setSelection] = useState<Figure | null>(null);

  useEffect(() => {
    console.log("state changed");
  }, [state]);

  const playerSelectionHandler = (figure: Figure) => {
    setSelection(figure);
    setState(GameState.PlayerSelection);
  };

  return (
    <main className={styles.container}>
      <div className={styles.selection}>
        {(selection == null || selection == Figure.Scissors) && (
          <FigureComponent
            className={styles.scissorsInitPosition}
            onSelection={playerSelectionHandler}
            figure={Figure.Scissors}
          ></FigureComponent>
        )}
        {(selection == null || selection == Figure.Paper) && (
          <FigureComponent
            className={styles.paperInitPosition}
            onSelection={playerSelectionHandler}
            figure={Figure.Paper}
          ></FigureComponent>
        )}
        {(selection == null || selection == Figure.Rock) && (
          <FigureComponent
            className={styles.rockInitPosition}
            onSelection={playerSelectionHandler}
            figure={Figure.Rock}
          ></FigureComponent>
        )}
        {(selection == null || selection == Figure.Lizard) && (
          <FigureComponent
            className={styles.lizardInitPosition}
            onSelection={playerSelectionHandler}
            figure={Figure.Lizard}
          ></FigureComponent>
        )}
        {(selection == null || selection == Figure.Spock) && (
          <FigureComponent
            className={styles.spockInitPosition}
            onSelection={playerSelectionHandler}
            figure={Figure.Spock}
          ></FigureComponent>
        )}
        {selection == null && <img src={background} alt="" />}
      </div>
    </main>
  );
};

export default Game;
