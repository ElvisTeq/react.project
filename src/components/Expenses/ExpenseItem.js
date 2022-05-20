import "./ExpenseItem.css"; // This is how CSS file is imported
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// <ExpenseDate date={props.date} /> => Storing "ExpenseData" functionality
const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Yoo");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
