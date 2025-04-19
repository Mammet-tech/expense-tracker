import React, { useState } from "react";
import MyForm from "./form";
import ExpenseTable from "./ExpenseTable";

const ExpenseTracker = ({ expenses, addExpense }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <MyForm addExpense={addExpense} />

      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-2 border border-gray-300 rounded w-full"
      />

      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
};

export default ExpenseTracker;
