import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // -------- Creating State with multiple States ----------
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // -------- Creating multiple Stated with one State ---------
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // => onChange={titleChangeHandler}
  // Gets total value in every Key Input
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    // ******** To Update State That Depends on The Previous State ********
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    // ******** To Update State That Depends on The Previous State ********
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    // ******** To Update State That Depends on The Previous State ********
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent page reload

    // Storing (State) data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new DataTransfer(enteredDate),
    };
    console.log(expenseData);
  };

  // We add "onSubmit" in the (form) because, (button type="submit") automatically has a (onClick) event
  return (
    <form onSubmit={submitHandler}>
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
