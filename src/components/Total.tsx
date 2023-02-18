import { FC, Fragment } from "react";

const Total: FC<{ total: number }> = ({ total }) => {
  return (
    <section>
      <span>Your Result</span>
      <div>
        <span>{total}</span>
        <span>of 100</span>
      </div>
      <span>Great</span>
      <span>
        You scored higher than 65% of the people who have taken these tests.
      </span>
    </section>
  );
};

export default Total;
