import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

const ExpenseHeader = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, curr) => (acc += curr), 0);
  return (
    <>
      <h3>Your Balance</h3>
      <h3>$ {total.toFixed(2)}</h3>
    </>
  );
};

export default ExpenseHeader;
