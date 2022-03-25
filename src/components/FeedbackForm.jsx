import React, { useState, useContext, useEffect } from "react";
import Card from "./Shared/Card";
import img from "../img/img.png";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
  const [inputText, setInputText] = useState("");
  const [inputRate, setInputRate] = useState("");

  const { addItemHandler, editedFeedback, updateItemHandler } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editedFeedback.edit === true) {
      setInputText(editedFeedback.item.text);
      setInputRate(editedFeedback.item.rating);
    }
  }, [editedFeedback]);

  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const inputRateHandler = (rate) => {
    setInputRate(rate);
  };

  const submitFormHandler = (event) => {
    const newFeedback = {
      rating: inputRate,
      text: inputText,
      id: Math.random(),
    };

    if (editedFeedback.edit === true) {
      updateItemHandler(editedFeedback.item.id, newFeedback);
    } else {
      addItemHandler(newFeedback);
    }

    setInputRate("");
    setInputText("");

    event.preventDefault();
  };

  return (
    <Card>
      <div className="container">
        <form onSubmit={submitFormHandler}>
          <h2 className="text-center">
            How would you rate your service with us?
          </h2>
          <div className="row">
            <div className="col-md-7 mt-5">
              <div className="form-group">
                <label htmlFor="text" className="font-weight-bold">
                  Write Review
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Write about Our Services"
                  onChange={inputTextHandler}
                  value={inputText}
                />
                {inputText.length < 10 ? (
                  <small>Review Must be Greater than 10 Characters</small>
                ) : (
                  ""
                )}
              </div>
              <RatingSelect value={inputRate} onChangeRate={inputRateHandler} />
              <button
                className="btn btn-secondary"
                disabled={inputText.length > 10 ? false : true}
              >
                Submit Now
              </button>
            </div>
            <div className="col-md-5">
              <img src={img} className="img-fluid " />
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default FeedbackForm;
