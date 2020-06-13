import React from "react";
import Header from "./components/layouts/Header";
import ExpenseItems from "./components/expenseCom/ExpenseItems";
import AddTransaction from "./components/expenseCom/AddTransaction";
import ShowDetails from "./components/expenseCom/ShowDetails";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className='container'>
        <Header />
        <ShowDetails />
        <ExpenseItems />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
