import React, { createContext, useReducer } from "react";
import ExpenseReduce from "./ExpenseReduce";
import { DELETE_EXPENSE, ADD_EXPENSE } from "./Actions";

const initState = {
  transactions: [
    { id: 1, title: "food", amount: 200 },
    { id: 2, title: "water", amount: 40 },
    { id: 3, title: "electricity", amount: -10 },
  ],
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReduce, initState);

  //actions
  const deleteExpense = (id) => {
    dispatch({
      type: DELETE_EXPENSE,
      payload: id,
    });
  };

  const addExpense = (transaction) => {
    dispatch({
      type: ADD_EXPENSE,
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteExpense,
        addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
