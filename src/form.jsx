import React, { useState } from "react";

const MyForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      name,
      description,
      amount: parseFloat(amount),
      date: new Date(date),
    };

    addExpense(newExpense);

    setName("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Add Expenses</h1>
      <p className="text-gray-600 mb-4">
        Enter your expenses below. You can add a description, amount, and date.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expense:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description:
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount:
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date:
          </label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default MyForm;
