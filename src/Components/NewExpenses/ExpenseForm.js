import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = event =>{
        setEnteredDate(event.target.value)

    }
    const submitHandler = (e) =>{
        e.preventDefault()
        const expenseData = {
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        // console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="top-inputs">
                    <div class="inputWrapper">
                        <label for="email" >Title</label>
                        <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                    </div>

                    <div class="inputWrapper">
                        <label for="password_field">Amount </label>
                        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
                    </div>
                </div>
                <div className="bottom-input">
                    <div class="inputWrapper">
                        <label for="password_field">Date </label>
                        <input type="date" min="2021-01-01" max="2022-12-12" onChange={dateChangeHandler} value={enteredDate}/>
                    </div>
                </div>
                <div className="add-btn">
                    <button type="submit">Add Expense</button>
                    <button type="button" onClick={props.onCancel} class="cancel-btn" style={{marginLeft: '10px'}}>Cancel</button>
                </div>
            </form>

        </div>
    )
}
export default ExpenseForm