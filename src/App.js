import './App.css';
import Expenses from './components/Expense/expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 102.23,
      date: new Date(2021,11,6),
    },
    {
      id: 'e2',
      title: 'book',
      amount: 292.23,
      date: new Date(2021,11,7),
    },
    {
      id: 'e1',
      title: 'librery',
      amount: 1202.23,
      date: new Date(2021,11,8),
    },
    
  ]
  const addExpenseHandler = (expense) => {
    console.log(expense);
    console.log("App.js");
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
