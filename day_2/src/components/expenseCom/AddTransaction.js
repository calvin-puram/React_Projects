import React, { useState, useContext } from "react";
import UseHeader from "../UseHeader";
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = () => {
  const [details, setDetails] = useState({ title: "", amount: "" });
  const { addExpense } = useContext(GlobalContext);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.floor(Math.random() * 1000),
      title: details.title,
      amount: +details.amount,
    };

    addExpense(newExpense);

    setDetails({ title: "", amount: "" });
  };
  return (
    <div>
      <UseHeader title='Add New Transaction' />
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='title'>Expense Title</label>
          <input
            type='text'
            name='title'
            className='input'
            value={details.title}
            onChange={handleChange}
          />
        </div>

        <div className='formGroup'>
          <label htmlFor='amount'>Expense - negative & income - positive</label>
          <input
            type='number'
            name='amount'
            id='amount'
            className='input'
            value={details.amount}
            onChange={handleChange}
          />
        </div>

        <input type='submit' value='Add Transaction' className='submit' />
      </form>
    </div>
  );
};

export default AddTransaction;
