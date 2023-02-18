import { FC } from "react";
import styles from "./Total.module.scss";

const Total: FC<{ total: number }> = ({ total }) => {
  return (
    <section className={styles.total}>
      <h3>Your Result</h3>
      <div className={styles.resultCircle}>
        <span>{total}</span>
        <span>of 100</span>
      </div>
      <h3>Great</h3>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default Total;
