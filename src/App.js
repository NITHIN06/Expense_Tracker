import './App.css';
import Expenses from './components/Expense/expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react'

const DUMMY_expenses = [
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
    id: 'e3',
    title: 'librery',
    amount: 1202.23,
    date: new Date(2021,11,8),
  },
  
]
function App() {
  const [expenses, setExpenses] = useState(DUMMY_expenses);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
