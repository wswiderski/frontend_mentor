import MainArticle from "./MainArticle";
import News from "./News";
import Top from "./Top";
import styles from "./HomeSection.module.scss";

const HomeSection = () => {
  return (
    <section className={styles.home}>
      <div className={styles.articles}>
        <MainArticle></MainArticle>
        <News></News>
      </div>
      <Top></Top>
    </section>
  );
};

export default HomeSection;
