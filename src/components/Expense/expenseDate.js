import './expenseDate.css'
function ExpenseDate(props) {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day"><strong>{day}</strong></div>
        </div>
    );
}

export default ExpenseDate;