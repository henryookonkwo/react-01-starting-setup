import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //using spread operator to update form inputs with state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    //Whenever you update states and you depend on the previous states, don't do the below:
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    //instead, do it like this, call a fucntion to the set Function:
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });

    // console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  //Alternative: creating a shared handler function
  //   const inputeChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identifier === "date") {
  //       setEnteredDate(value);
  //     } else {
  //       setEnteredAmount(value);
  //     }
  //   };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //bottom-up communication to pass data to NewExpense
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // setIsExpenseFormShowing(false);
    // setShowButton(!showButton);

    // console.log(expenseData);
  };

  // const [isExpenseFormShowing, setIsExpenseFormShowing] = useState(false);
  // const [showButton, setShowButton] = useState(true);

  // const showExpenseFormHandler = () => {
  //   setIsExpenseFormShowing(true);
  //   setShowButton(!showButton);
  // };

  // const unshowExpenseFormHandler = () => {
  //   setIsExpenseFormShowing(false);
  //   setShowButton(!showButton);
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            onChange={titleChangeHandler}
            // onChange={(e) => inputeChangeHandler("title", e.target.value)}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
            // onChange={(e) => inputeChangeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
            // onChange={(e) => inputeChangeHandler("date", e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
