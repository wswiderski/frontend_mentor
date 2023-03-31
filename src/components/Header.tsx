import styles from "./Header.module.scss";
import ScoreBox from "./ScoreBox";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src="assets/logo.svg" alt="Logo" />
      <span />
      <ScoreBox score={0} />
    </div>
  );
};

export default Header;
