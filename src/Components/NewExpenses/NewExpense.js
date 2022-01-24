import React from "react";
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{
    const saveExpenceDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,id:Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
    }
    return(
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData = {saveExpenceDataHandler}/>
        </div>
    )
}
export default NewExpense