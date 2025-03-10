import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense, filter, setFilter }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;