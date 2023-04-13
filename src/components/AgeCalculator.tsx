import { useState } from "react";
import AgeResult from "./AgeResult";
import BirthDateInputForms from "./BirthDateInputForms";

export type BirthDate = {
  day: number;
  month: number;
  year: number;
};

type AgeResult = {
  days: number;
  months: number;
  years: number;
};

const AgeCalculator = () => {
  const [result, setResult] = useState<AgeResult>({
    days: -1,
    months: -1,
    years: -1,
  });
  const submissionHandler = (date: BirthDate) => {};

  return (
    <div>
      <BirthDateInputForms submissionHandler={submissionHandler} />
      <AgeResult
        days={result.days}
        months={result.months}
        years={result.years}
      />
    </div>
  );
};

export default AgeCalculator;
