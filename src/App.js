import React from "react";
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { FeedbackContextProvider } from "./Context/FeedbackContext";

function App() {
  return (
    <FeedbackContextProvider>
      <Navbar />
      <div className="container mt-5">
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackContextProvider>
  );
}

export default App;
