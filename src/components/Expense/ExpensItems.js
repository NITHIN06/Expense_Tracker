import Card from '../UI/Card'
import './expensesItems.css'
import ExpenseDate from './expenseDate';
function ExpensItems(props){
    return(
        <li>
            <Card className="expense_detail">
                <ExpenseDate date={props.date}/>
                <div className="expense_dt">
                    <h2>{props.title}</h2>
                    <div className="expense_amount">
                        <p>${props.amount}</p>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default ExpensItems;