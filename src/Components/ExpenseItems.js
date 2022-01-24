import React,{useState} from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card';
function ExpenseItems(props) {
  
  const { title, amount, date } = props;
  const [Title,setTitle] = useState(title)
  const clickHandler = () =>{
    setTitle('Title Changed')
    console.log(Title)
  }
  return (
    <div>
      <Card className="ExpenseItem-main">
        <ExpenseDate date={date} />
        <div className="description">
          <h4>{Title}</h4>
        </div>
        <div className="amount">
          <h6>{amount}</h6>
        </div>
        <div className="change-btn"><button onClick = {clickHandler}>CHange Title</button></div>
        </Card>
      </div>
   
  );
}
export default ExpenseItems;
