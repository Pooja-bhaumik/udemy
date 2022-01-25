import React,{useState} from 'react'
import Expenses from "./Components/Expenses"
import NewExpense from "./Components/NewExpenses/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'shose',
    date: new Date(2022, 5, 12),
    amount: 45.98
  },
  {
    id: 2,
    title: 'New Tv',
    date: new Date(2022, 7, 14),
    amount: 87.09
  },
  {
    id: 3,
    title: 'Cloths',
    date: new Date(2022, 9, 12),
    amount: 21.04
  }
]
function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  console.log(expenses)
  const addExpenseHandler = expense =>{
    console.log('In app js')
    console.log(expense)
    setExpenses((prevExpenses)=>{
      console.log('prevState',prevExpenses)
      return [expense,...prevExpenses]
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpenseHandler = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
