import {useState} from 'react';
import ExpensItems from './ExpensItems';
import Card from '../UI/Card';
import './expenses.css';
import ExpensesFilter from './ExpenseFilter';
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensItems title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpensItems title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpensItems title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
        </Card>
    );
}

export default Expenses;