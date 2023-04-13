import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  useRef,
  useState,
} from "react";
import { BirthDate } from "./AgeCalculator";

export type BirthDateProps = {
  submissionHandler: (date: BirthDate) => void;
};

const BirthDateInputForms: FC<BirthDateProps> = (props) => {
  const [day, setDay] = useState("");
  const [dayErrorMsg, setDayErrorMsg] = useState("");

  const [month, setMonth] = useState("");
  const [monthErrorMsg, setMonthErrorMsg] = useState("");

  const [year, setYear] = useState("");
  const [yearErrorMsg, setYearErrorMsg] = useState("");

  const [formValid, setFormValid] = useState(true);

  const dayChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "").substring(0, 2);
    setDay(value);
    validateDay(value);
  };

  const dayBlurHandler = () => {
    validateDay(day);
  };

  const validateDay = (value: string) => {
    setFormValid(true);
    if (value.length == 0) {
      setDayErrorMsg("This field is required");
      return "This field is required";
    }
    if (+value < 1 || +value > 31) {
      setDayErrorMsg("Must be a valid day");
      return "Must be a valid day";
    }
    setDayErrorMsg("");
    return "";
  };

  const monthChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "").substring(0, 2);
    setMonth(value);
    validateMonth(value);
  };

  const monthBlurHandler = () => {
    validateMonth(month);
  };

  const validateMonth = (value: string) => {
    setFormValid(true);
    if (value.length == 0) {
      setMonthErrorMsg("This field is required");
      return "This field is required";
    }
    if (+value < 1 || +value > 12) {
      setMonthErrorMsg("Must be a valid month");
      return "Must be a valid month";
    }
    setMonthErrorMsg("");
    return "";
  };

  const yearChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setYear(value);
    validateYear(value);
  };

  const yearBlurHandler = () => {
    validateYear(year);
  };

  const validateYear = (value: string) => {
    setFormValid(true);
    if (value.length == 0) {
      setYearErrorMsg("This field is required");
      return "This field is required";
    }
    if (new Date().getFullYear() < +value) {
      setYearErrorMsg("Must be in the past");
      return "Must be in the past";
    }
    setYearErrorMsg("");
    return "";
  };

  const submissionHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dayErr = validateDay(day);
    const monthErr = validateMonth(month);
    const yearErr = validateYear(year);
    if (dayErr.length === 0 && monthErr.length === 0 && yearErr.length === 0) {
      const currentDate = new Date();
      const birthDate = new Date(`${year}-${month}-${day}`);
      if (isNaN(Number(birthDate))) {
        setDayErrorMsg("Must be valid date");
        setFormValid(false);
        return;
      }
      if (currentDate.getTime() < birthDate.getTime()) {
        setDayErrorMsg("Date must be in the past");
        setFormValid(false);
        return;
      }
      setFormValid(true);
    }
  };

  return (
    <form onSubmit={submissionHandle}>
      <div>
        <label htmlFor="day">DAY</label>
        <input
          type="text"
          id="day"
          value={day}
          placeholder="DD"
          onChange={dayChangeHandler}
          onBlur={dayBlurHandler}
        />
        {dayErrorMsg && <span>{dayErrorMsg}</span>}
      </div>
      <div>
        <label htmlFor="month">MONTH</label>
        <input
          type="text"
          id="month"
          value={month}
          placeholder="MM"
          onChange={monthChangeHandler}
          onBlur={monthBlurHandler}
        />
        {monthErrorMsg && <span>{monthErrorMsg}</span>}
      </div>
      <div>
        <label htmlFor="year">YEAR</label>
        <input
          type="text"
          id="year"
          value={year}
          placeholder="YYYY"
          onChange={yearChangeHandler}
          onBlur={yearBlurHandler}
        />
        {yearErrorMsg && <span>{yearErrorMsg}</span>}
      </div>
      <button type="submit">TEST</button>
    </form>
  );
};

export default BirthDateInputForms;
