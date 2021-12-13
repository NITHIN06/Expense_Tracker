import Card from '../UI/Card'
import './expensesItems.css'
import ExpenseDate from './expenseDate';
import {useState} from 'react';
function ExpensItems(props){
    const [title, setTitle] = useState(props.title);
    const titleUpdate = () =>{
        setTitle("Updated");
    }
    return(
        <Card className="expense_detail">
            <ExpenseDate date={props.date}/>
            <div className="expense_dt">
                <h2>{title}</h2>
                <div className="expense_amount">
                    <p>${props.amount}</p>
                </div>
            </div>
        </Card>
    );
}

export default ExpensItems;