import React from "react";

function RatingSelect({ onChangeRate, value }) {
  const rateHandler = (event) => {
    onChangeRate(+event.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor="text" className="font-weight-bold">
        Rate 1-10
      </label>
      <input
        type="number"
        value={value}
        min={1}
        max={10}
        className="form-control p-3"
        placeholder="Rate Our Services"
        onChange={rateHandler}
      />
    </div>
  );
}

export default RatingSelect;
