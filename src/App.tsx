import styles from "./App.module.scss";

import Navbar from "./components/Navbar";
import HomeSection from "./components/home-section/HomeSection";

const App = () => {
  return (
    <main className={styles.app}>
      <Navbar></Navbar>
      <HomeSection></HomeSection>
    </main>
  );
};

export default App;
