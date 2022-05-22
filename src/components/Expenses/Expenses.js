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

  // Filtering Years
  const filteredYears = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // **************** Using conditions in Components ****************
  let expensesContent = <p>No expenses found.</p>;

  if (filteredYears.length > 0) {
    expensesContent = filteredYears.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  // This works because we added "ExpenseItem(prop)"
  // selected={filterYear} => Sending "select" default value to "ExpensesFilter.js"
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
