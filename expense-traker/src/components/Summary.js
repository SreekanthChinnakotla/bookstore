import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Summary = () => {
  const { expenses, filter } = useContext(ExpenseContext);
  const filteredExpenses = filter === "All" ? expenses : expenses.filter(expense => expense.category === filter);
  const total = filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="container mt-3">
      <h3>Total Expenses: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Summary;