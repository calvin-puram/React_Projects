import React, { useContext } from "react";
import UseHeader from "../UseHeader";

import { GlobalContext } from "../../context/GlobalState";
import ExpenseSingle from "./ExpenseSingle";

const ExpenseItems = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <UseHeader title='history' />
      {transactions.map((transaction) => (
        <ExpenseSingle transaction={transaction} key={transaction.id} />
      ))}
    </div>
  );
};

export default ExpenseItems;
