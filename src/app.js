import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import selectExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibileExpenses = selectExpenses(state.expenses, state.filters);

  //console.log(visibileExpenses);
});

store.dispatch(
  addExpense({ description: "Water Bill", amount: 100, createdAt: 4000 })
);

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 500, createdAt: 9000 })
);

store.dispatch(
  addExpense({ description: "Rent", amount: 109500, createdAt: 5000 })
);

//store.dispatch(setTextFilter("water"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
