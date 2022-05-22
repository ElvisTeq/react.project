import "./ExpenseItem.css"; // This is how CSS file is imported
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// <ExpenseDate date={props.date} /> => Storing "ExpenseData" functionality
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
