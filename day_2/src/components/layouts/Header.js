import React from "react";
import ExpenseHeader from "../expenseCom/ExpenseHeader";

const Header = () => {
  return (
    <div style={headerStyle}>
      <h1 style={expenseStyle}>Expense Tracker</h1>
      <ExpenseHeader />
    </div>
  );
};

const headerStyle = {
  textAlign: "center",
  margin: "4rem auto",
};

const expenseStyle = {
  marginBottom: "2rem",
  fontWeight: "100",
};

export default Header;
