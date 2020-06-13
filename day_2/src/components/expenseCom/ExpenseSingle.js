import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalState";

const ExpenseSingle = ({ transaction }) => {
  const { deleteExpense } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDel = (id) => {
    deleteExpense(id);
  };
  return (
    <ul>
      <li
        style={listStyle}
        className={transaction.amount < 0 ? "borderRed" : "borderGreen"}
      >
        <div>
          <span className='del' onClick={() => handleDel(transaction.id)}>
            x
          </span>
          <span>{transaction.title}</span>
        </div>
        <span>
          ${sign}
          {Math.abs(transaction.amount)}
        </span>
      </li>
    </ul>
  );
};

const listStyle = {
  background: "#fff",
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem .5rem",
  borderRadius: "5px",
  margin: ".5rem 0",
};

ExpenseSingle.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default ExpenseSingle;
