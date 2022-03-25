import React, { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [editedFeedback, setEditedFeedback] = useState({
    item: {},
    edit: false,
  });

  const [feedback, setFeedback] = useState([
    {
      id: Math.random(),
      text: "This is a feedback application",
      rating: 10,
    },
    {
      id: Math.random(),
      text: "This is a feedback application",
      rating: 10,
    },
  ]);

  const addItemHandler = (item) => {
    setFeedback([item, ...feedback]);
  };

  const deleteItemHandler = (id) => {
    const deletedFeedback = feedback.filter((item) => {
      return item.id !== id;
    });

    setFeedback(deletedFeedback);
  };

  const editItemHandler = (item) => {
    setEditedFeedback({
      item,
      edit: true,
    });

    console.log(editedFeedback);
  };

  const updateItemHandler = (id, updatedItem) => {
    const updatedFeedback = feedback.map((item) => {
      if (item.id === id) {
        return updatedItem;
      } else {
        return item;
      }
    });

    setFeedback(updatedFeedback);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addItemHandler,
        deleteItemHandler,
        editedFeedback,
        editItemHandler,
        updateItemHandler,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
