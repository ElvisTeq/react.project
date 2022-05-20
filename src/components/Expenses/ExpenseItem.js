import { useState } from "react";
import "./ExpenseItem.css"; // This is how CSS file is imported
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// <ExpenseDate date={props.date} /> => Storing "ExpenseData" functionality
const ExpenseItem = (props) => {
  // Using "useState()"
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!"); // Function for updating the value
    console.log(title); // This will log (props.title), because "setTitle()" will make changes after the end of the function
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
