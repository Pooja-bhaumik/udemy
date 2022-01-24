import React from 'react'
import ExpenseItems from './ExpenseItems'
import './Expenses.css'
const Expenses = (props) => {
    return (
        <div className='expenses'>
            <ExpenseItems title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />
            <ExpenseItems title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date} />
            <ExpenseItems title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date} />
        </div>
    )
}
export default Expenses