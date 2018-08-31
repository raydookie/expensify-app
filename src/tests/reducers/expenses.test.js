import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "999",
    description: "Bear",
    note: "",
    amount: 2000,
    createdAt: 0
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      description: "BOOOOM"
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe("BOOOOM");
});

test("should not edit an expense if expense not founs", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      description: "BOOOOM"
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
