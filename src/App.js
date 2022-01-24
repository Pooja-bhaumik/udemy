import ExpenseItems from "./Components/ExpenseItems";
import PracticeForm from "./Components/PracticeForm";
function App() {
  const expenses = [
    {
      id:1,
      title:'shose',
      date:new Date(2022,5,12),
      amount:45.98
    },
    {
      id:2,
      title:'New Tv',
      date:new Date(2022,7,14),
      amount:87.09
    },
    {
      id:3,
      title:'Cloths',
      date:new Date(2022,9,12),
      amount:21.04
    }
  ]
  return (
    <div className="App">
       <ExpenseItems title = {expenses[0].title} 
       amount = {expenses[0].amount} 
       date ={expenses[0].date}/>
      <ExpenseItems title = {expenses[1].title} 
       amount = {expenses[1].amount} 
       date ={expenses[1].date}/>
      <ExpenseItems title = {expenses[2].title} 
       amount = {expenses[2].amount} 
       date ={expenses[2].date}/>
       <PracticeForm/>
    </div>
  );
}

export default App;
