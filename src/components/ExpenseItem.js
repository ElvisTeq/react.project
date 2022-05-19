import "./ExpenseItem.css"; // This is how CSS file is imported
import ExpenseDate from "./ExpenseDate";

// <ExpenseDate date={props.date} /> => Storing "ExpenseData" functionality
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
