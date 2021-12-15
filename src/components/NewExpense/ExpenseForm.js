import './ExpenseForm.css'
import {useState} from 'react'
const ExpenseForm = (props) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newAmount, setNewAmount] = useState('');
    // const [newDescription, setNewDescription] = useState('');
    // const [newInput, setNewInput] = useState({newTitle: '', newDescription: '', newDate: '', newAmount: ''});
    const updateTitle = (event) => {
        setNewTitle(event.target.value)
        // setNewInput(
        //     {...newInput,
        //     newTitle: event.target.value}
        // );
        // setNewInput((prevState) => {
        //     return(
        //         {...prevState,
        //         newTitle: event.target.value}
        //     );
        // })
    }
    const updateDate = (event) => {
        setNewDate(event.target.value)
        // setNewInput(
        //     {...newInput,
        //     newDate: event.target.value}
        // );
        // setNewInput((prevState) => {
        //     return(
        //         {...prevState,
        //         newDate: event.target.value}
        //     );
        // })
    }
    const updateAmount = (event) => {
        setNewAmount(event.target.value);
        // setNewInput(
        //     {...newInput,
        //     newAmount: event.target.value}
        // );
        // setNewInput((prevState) => {
        //     return(
        //         {...prevState,
        //         newAmount: event.target.value}
        //     );
        // })
    }
    // const updateDesp = (event) => {
    //     setNewDescription(event.target.value)
        // setNewInput(
        //     {...newInput,
        //     newDescription: event.target.value}
        // );
        // setNewInput((prevState) => {
        //     return(
        //         {...prevState,
        //         newDescription: event.target.value}
        //     );
        // })
    // }

    const newExpense = (event) =>{
        event.preventDefault();
        const expense = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate),
            // description: newDescription
        }
        props.onNewExpense(expense);
        setNewTitle('');
        setNewAmount('');
        // setNewDescription('');
        setNewDate('');
    }
    return(
        <form onSubmit={newExpense}>
            <div className="fields">
                <div className="field">
                    <label>Title</label>
                    <input type="text" value={newTitle} placeholder='Title' onChange={updateTitle}required/>
                </div>
                {/* <div className="field">
                    <label>Description(optional)</label>
                    <input type="textbox" value={newDescription} placeholder='Description' onChange={updateDesp}/>
                </div> */}
                <div className="field">
                    <label>Amount</label>
                    <input type="number" value={newAmount} min='0.01' step='0.01' placeholder='00.00' onChange={updateAmount} required/>
                </div>

                <div className="field">
                    <label>Date</label>
                    <input type="date" value={newDate} min='2019-01-01' max='2022-12-31' onChange={updateDate} required/>
                </div>
            </div>
            <div className="submit">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;