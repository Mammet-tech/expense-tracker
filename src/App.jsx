import React, { useState } from "react";
import "./App.css";

import ExpenseTracker from "./Expensetracker";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <>
      <div className="App max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Expense Tracker
        </h1>
        <p className="text-lg text-gray-700">
          This is a simple expense tracker app built with React. It allows you
          to track your expenses and income, and provides a summary of your
          financial situation.
        </p>

        <ExpenseTracker expenses={expenses} addExpense={addExpense} />
      </div>
    </>
  );
}

export default App;
