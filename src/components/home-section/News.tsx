import NewsItem from "./NewsItem";
import styles from "./News.module.scss";

const News = () => {
  return (
    <div className={styles.news}>
      <h2>New</h2>
      <NewsItem
        topic="Hydrogen VS Electric Cars"
        description="Will hydrogen-fueled cars ever catch up to EVs?"
      ></NewsItem>
      <span></span>
      <NewsItem
        topic="The Downsides of AI Artistry"
        description="What are the possible adverse effects of on-demand AI image generation?"
      ></NewsItem>
      <span></span>
      <NewsItem
        topic="Is VC Funding Drying Up?"
        description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      ></NewsItem>
    </div>
  );
};

export default News;
