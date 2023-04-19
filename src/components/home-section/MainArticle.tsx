import articleImg from "../../assets/image-web-3-desktop.jpg";
import articleImgMobile from "../../assets/image-web-3-mobile.jpg";
import { useWindowSize } from "../../util/useWindowSize";
import styles from "./MainArticle.module.scss";

const MainArticle = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 600;

  return (
    <div className={styles.mainArticle}>
      <img src={isMobile ? articleImgMobile : articleImg} alt="Article image" />
      <div>
        <h2>The Bright Future of Web 3.0?</h2>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
      </div>
      <button>READ MORE</button>
    </div>
  );
};

export default MainArticle;
