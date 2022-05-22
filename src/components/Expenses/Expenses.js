import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // This works because we added "ExpenseItem(prop)"
  // selected={filterYear} => Sending "select" default value to "ExpensesFilter.js"
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
