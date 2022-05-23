import Card from "../UI/Card";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // Filtering Years
  const filteredYears = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // This works because we added "ExpenseItem(prop)"
  // selected={filterYear} => Sending "select" default value to "ExpensesFilter.js"
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredYears} />
        <ExpensesList items={filteredYears} />
      </Card>
    </div>
  );
};

export default Expenses;
