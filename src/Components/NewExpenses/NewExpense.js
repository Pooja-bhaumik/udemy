import React,{useState} from "react";
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{
    const [isEditing,setIsEditing] = useState(false)
    const saveExpenceDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,id:Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
        setIsEditing(false)
    }
    const startEditingHandler = ()=>{
        setIsEditing(true)
    }
    const stopEditingHandler = ()=>{
        setIsEditing(false)
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} class="add-btn">Add New Expense</button>}
           {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenceDataHandler} onCancel = {stopEditingHandler}/>}
        </div>
    )
}
export default NewExpense