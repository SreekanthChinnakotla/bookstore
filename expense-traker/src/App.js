import ExpenseProvider from "./context/ExpenseContext";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

function App() {
  return (
    <ExpenseProvider>
      <Navbar />
      <ExpenseForm />
      <Summary />
      <ExpenseList />
    </ExpenseProvider>
  );
}

export default App;