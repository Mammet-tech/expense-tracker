import React from "react";

const ExpenseTable = ({ expenses }) => {
  return (
    <div className="mt-6">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Expense</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No expenses yet.
              </td>
            </tr>
          ) : (
            expenses.map((expense, index) => (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {expense.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {expense.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${expense.amount.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(expense.date).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
