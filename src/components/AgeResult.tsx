import { FC } from "react";

const AgeResult: FC<{ years: number; months: number; days: number }> = (
  props
) => {
  return (
    <div>
      <div>
        <span>{props.years != -1 ? props.years : "--"}</span> <span>years</span>
      </div>
      <div>
        <span>{props.months != -1 ? props.months : "--"}</span>{" "}
        <span>months</span>
      </div>
      <div>
        <span>{props.days != -1 ? props.days : "--"}</span> <span>days</span>
      </div>
    </div>
  );
};

export default AgeResult;
