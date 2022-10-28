import { useState } from "react";
import "./RatingCard.css";

function RatingCard() {
  const [submited, setSubmited] = useState(false);
  const [rate, setRate] = useState(0);

  function submitHandler() {
    if (rate) {
      setSubmited(true);
    }
  }

  function onRateSelectionHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const newRate = parseInt(event.currentTarget.innerHTML);
    setRate(newRate);
  }

  return (
    <div className="card">
      <div className={`card-inner ${submited ? "submited" : ""}`}>
        <div className="card__face">
          <div className="card__main">
            <img
              className="img--front"
              src="./img/icon-star.svg"
              alt="Star img"
            />
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="rating__container">
              <button
                className={rate === 1 ? "selected" : ""}
                onClick={onRateSelectionHandler}
              >
                1
              </button>
              <button
                className={rate === 2 ? "selected" : ""}
                onClick={onRateSelectionHandler}
              >
                2
              </button>
              <button
                className={rate === 3 ? "selected" : ""}
                onClick={onRateSelectionHandler}
              >
                3
              </button>
              <button
                className={rate === 4 ? "selected" : ""}
                onClick={onRateSelectionHandler}
              >
                4
              </button>
              <button
                className={rate === 5 ? "selected" : ""}
                onClick={onRateSelectionHandler}
              >
                5
              </button>
            </div>
            <button
              className={`submision-btn ${rate === 0 ? "inactive" : "active"}`}
              onClick={submitHandler}
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div className="card__face card__face--back">
          <div className="card__main card__main--back">
            <img src="./img/illustration-thank-you.svg" alt="Thank you img" />
            <h3>You selected {rate} out of 5</h3>
            <h2>Thank you!</h2>
            <p>
              We appreciate you taking the time to give a rating.
              <br />
              If you ever need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingCard;
