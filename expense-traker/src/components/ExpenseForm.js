import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    addExpense({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
    });

    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>
      <button className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;