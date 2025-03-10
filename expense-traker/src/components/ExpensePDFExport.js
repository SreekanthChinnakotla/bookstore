import { useContext } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import { ExpenseContext } from "../context/ExpenseContext";

const ExpensePDFExport = () => {
  const { expenses, filter } = useContext(ExpenseContext);
  const filteredExpenses = filter === "All" ? expenses : expenses.filter(expense => expense.category === filter);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Expense Report", 14, 10);
  
    const tableColumn = ["Description", "Amount ($)", "Category"];
    const tableRows = filteredExpenses.map(expense => [
      expense.description,
      expense.amount.toFixed(2),
      expense.category
    ]);
  
    autoTable(doc, { head: [tableColumn], body: tableRows, startY: 20 });
    doc.save("expenses_report.pdf");
  };
  

  return (
    <button className="btn btn-primary" onClick={generatePDF}>Export PDF</button>
  );
};

export default ExpensePDFExport;