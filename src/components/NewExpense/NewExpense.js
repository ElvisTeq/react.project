import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // Function to save data (which we going to use to get data from another Component)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    // Hide form after Submitting
    setIsEditing(false);
  };

  // Challenge 4

  // To show form after clicking
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // To hide form after clicking
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // "onSaveExpenseData" => is the function we gonna call in "ExpenseForm.js"
  // Which is going to call the function from this Componen "saveExpenseDataHandler" using (props.onSaveExpenseData())
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
