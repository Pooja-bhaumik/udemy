
import Expenses from "./Components/Expenses"
import NewExpense from "./Components/NewExpenses/NewExpense";
function App() {
  const expenses = [
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
  const addExpenseHandler = expense =>{
    console.log('In app js')
    console.log(expense)
  }
  return (
    <div className="App">
      <NewExpense onAddExpenseHandler = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
