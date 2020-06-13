import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

const ShowDetails = () => {
  const { transactions } = useContext(GlobalContext);
  const income = [];
  const expense = [];
  transactions.map((transaction) => {
    if (transaction.amount > 0) {
      income.push(transaction.amount);
    } else {
      expense.push(transaction.amount);
    }
  });
  const totalIncome = income.reduce((acc, curr) => (acc += curr), 0);
  const ExpenseIncome = expense.reduce((acc, curr) => (acc += curr), 0);
  console.log(income);
  return (
    <div style={card}>
      <div className='cardItem'>
        <h4>Income</h4>
        <h4 className='borderColorGreen'>$ {totalIncome.toFixed(2)}</h4>
      </div>
      <div className='divider'></div>
      <div className='cardItem'>
        <h4>Expense</h4>
        <h4 className='borderColorRed'>
          $ - {Math.abs(ExpenseIncome).toFixed(2)}
        </h4>
      </div>
    </div>
  );
};

const card = {
  background: "#fff",
  padding: "1rem 3rem",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0px .5px 1px #333",
};

export default ShowDetails;
