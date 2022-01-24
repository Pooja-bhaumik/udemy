import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card';
function ExpenseItems(props) {
  const { title, amount, date } = props;
  return (
    <div>
      <Card className="ExpenseItem-main">
        <ExpenseDate date={date} />
        <div className="description">
          <h4>{title}</h4>
        </div>
        <div className="amount">
          <h6>{amount}</h6>
        </div>
        </Card>
      </div>
   
  );
}
export default ExpenseItems;
