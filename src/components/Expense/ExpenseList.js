import ExpensItems from './ExpensItems';
import './ExpenseList.css'
import './expenses.css'
const ExpenseList = (props) => {
    let expensContent = <p>No Expenses found</p>
    if(props.filter.length === 0) {
      return expensContent
    }
    
    return (
        <ul type="none">
            {props.filter.map((expense1) => (<ExpensItems key={expense1.id} title={expense1.title} amount={expense1.amount} date={expense1.date} />))}
        </ul>
    );
}
export default ExpenseList