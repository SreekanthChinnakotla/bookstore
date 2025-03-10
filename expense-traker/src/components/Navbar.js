import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpensePDFExport from "./ExpensePDFExport";

const Navbar = () => {
  const { filter, setFilter } = useContext(ExpenseContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <span className="navbar-brand">Expense Tracker</span>
      <div className="d-flex">
        <select className="form-select w-auto me-2" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="General">General</option>
        </select>
        <ExpensePDFExport />
      </div>
    </nav>
  );
};

export default Navbar;