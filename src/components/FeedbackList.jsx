import React, { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <h2 className="text-center mt-4">No Feedback Added Yet</h2>;
  }

  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1);

  return (
    <div className="container mt-3">
      <div className="row justify-content-between">
        <p className="lead font-weight-bold">{feedback.length} Review</p>
        <p className="lead font-weight-bold">
          Average Rating: {isNaN(average) ? 0 : average}
        </p>
      </div>
      <FeedbackItem />
    </div>
  );
}

export default FeedbackList;
