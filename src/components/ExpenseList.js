import React from "react";
import { connect } from "react-redux";
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    <h1>List of Expenses</h1>
    {props.expenses.length > 0 &&
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
  </div>
);

// const ConnectedExpenseList = connect(state => {
//   return { expenses: state.expenses };
// })(ExpenseList);

// export default ConnectedExpenseList;

const mapStateToProps = state => {
  return { expenses: selectExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);
