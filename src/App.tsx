import styles from "./App.module.scss";
import GameController from "./components/GameController";

const App = () => {
  return (
    <div className={styles.app}>
      <GameController></GameController>
    </div>
  );
};

export default App;
