import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import React, {useState} from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const setNewExpense = (newData) => {
        const NewData={
            ...newData,
            id: Math.random().toString()
        }
        props.onAddExpense(NewData);
        setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='newExpense'>
            {
                !isEditing &&(
                    <button onClick={startEditingHandler}>Add Expense</button>
                )
            }
            {
                isEditing && (
                    <ExpenseForm onNewExpense={setNewExpense} onCancel={stopEditingHandler}/>
                )
            }
        </div>
    );

}

export default NewExpense;