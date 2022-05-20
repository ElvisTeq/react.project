import "./ExpenseItem.css"; // This is how CSS file is imported
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// <ExpenseDate date={props.date} /> => Storing "ExpenseData" functionality
const ExpenseItem = (props) => {
  // This will not be call because => "App.js" is called after the "clickHandler"
  let title = props.title;

  const clickHandler = () => {
    title = "Updated!";
    console.log(title);
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
