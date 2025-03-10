import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses, removeExpense, filter } = useContext(ExpenseContext);
  const filteredExpenses = filter === "All" ? expenses : expenses.filter(expense => expense.category === filter);

  return (
    <div className="container mt-3">
      {filteredExpenses.length === 0 ? <p>No expenses found.</p> : 
        <ul className="list-group">
          {filteredExpenses.map((expense) => (
            <li key={expense.id} className="list-group-item d-flex justify-content-between">
              <span>{expense.description} - ${expense.amount} ({expense.category})</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default ExpenseList;