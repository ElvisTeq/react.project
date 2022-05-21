import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // -------- Creating State with multiple States ----------
  // const [enteredTitle, setTitle] = useState("");
  // const [enteredAmount, setAmount] = useState("");
  // const [enteredDate, setDate] = useState("");

  // -------- Creating multiple Stated with one State ---------
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // => onChange={titleChangeHandler}
  const titleChangeHandler = (event) => {
    // Gets total value in every Key Input
    setUserInput({
      ...userInput, // Add the rest of the Data as default
      enteredTitle: event.target.value, // Change the one we need
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
