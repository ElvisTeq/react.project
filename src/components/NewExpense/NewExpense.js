import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // Function to save data (which we going to use to get data from another Component)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  // "onSaveExpenseData" => is the function we gonna call in "ExpenseForm.js"
  // Which is going to call the function from this Componen "saveExpenseDataHandler" using (props.onSaveExpenseData())
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
