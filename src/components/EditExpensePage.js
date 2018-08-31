import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          console.log("updated", expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/"); // switch to another page just like using the link
        }}
      />
      <button
        onClick={e => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/"); // switch to another page just like using the link
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    // grab all the filters from the state
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
