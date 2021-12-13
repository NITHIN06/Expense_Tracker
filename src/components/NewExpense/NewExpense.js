import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const setNewExpense = (newData) => {
        const NewData={
            ...newData,
            id: Math.random().toString()
        }
        console.log(NewData);
        props.onAddExpense(NewData);
    }
    return (
        <div className='newExpense'>
            <ExpenseForm onNewExpense={setNewExpense} />
        </div>
    );

}

export default NewExpense;