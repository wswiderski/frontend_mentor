import { FC } from "react";
import styles from "./UserOpinion.module.scss";

const UserOpinion: FC<{ name: string; imgUrl: string; opinion: string }> = ({
  name,
  imgUrl,
  opinion,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <img src={imgUrl} alt="Sdsadasdas" />
        <div className={styles.text}>
          <span>{name}</span>
          <span>Verified Buyer</span>
        </div>
      </div>
      <span>{`“ ${opinion} ”`}</span>
    </div>
  );
};

export default UserOpinion;
