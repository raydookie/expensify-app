import React from "react";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";
import EditExpensePage from "./EditExpensePage";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Description: {description}</h3>
    </Link>
    <p>
      Amount: {amount}, was created at {createdAt}
    </p>
  </div>
);

const mapStateToProps = state => {
  return {
    // grab all the filters from the state
    expenses: state.expenses
  };
};

export default ExpenseListItem;
