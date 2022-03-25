import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./Shared/Card";
import FeedbackContext from "../Context/FeedbackContext";
function FeedbackItem() {
  const { feedback, deleteItemHandler, editItemHandler } =
    useContext(FeedbackContext);
  return (
    <div className="my-3">
      {feedback.map((item) => {
        return (
          <div className="mb-3" key={item.id}>
            {" "}
            <Card>
              <div className="row justify-content-between p-3">
                <span className="font-weight-bold">Rate: {item.rating}</span>
                <p className="lead mb-0">{item.text}</p>
                <span>
                  <FaEdit
                    onClick={() => editItemHandler(item)}
                    className="icon"
                    color="purple"
                  />
                  <FaTimes
                    onClick={() => deleteItemHandler(item.id)}
                    className="icon"
                    color="purple"
                  />
                </span>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default FeedbackItem;
