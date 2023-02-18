import { Fragment } from "react";
import styles from "./App.module.scss";
import Navbar from "./components/navbar/Navbar";
import NewsHome from "./components/news-home/NewsHome";

function App() {
  return (
    <main className={styles.root}>
      <Navbar></Navbar>
      <NewsHome></NewsHome>
    </main>
  );
}

export default App;
