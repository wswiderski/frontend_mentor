import TopItem from "./TopItem";

import article1 from "../../assets/image-retro-pcs.jpg";
import article2 from "../../assets/image-top-laptops.jpg";
import article3 from "../../assets/image-gaming-growth.jpg";

import style from "./Top.module.scss";

const Top = () => {
  return (
    <div className={style.top}>
      <TopItem
        number="01"
        topic="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
        imageSrc={article1}
      ></TopItem>
      <TopItem
        number="02"
        topic="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
        imageSrc={article2}
      ></TopItem>
      <TopItem
        number="03"
        topic="The Growth of Gaming"
        description="How the pandemic has sparked fresh opportunities."
        imageSrc={article3}
      ></TopItem>
    </div>
  );
};

export default Top;
