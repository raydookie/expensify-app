import momemnt from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should generate setTextFilter action object", () => {
  const textValue = "Search Text";
  const action = setTextFilter(textValue);

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: textValue
  });
});

test("should generate default setTextFilter action object", () => {
  const textValue = "";
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: textValue
  });
});

test("should generate sortByDate action object", () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: "SORT_BY_DATE",
    sortBy: "date"
  });
});

test("should generate sortByAmount action object", () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
  });
});

test("should generate setStartDate action object", () => {
  const testStartDate = momemnt();
  const action = setStartDate(testStartDate);

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: testStartDate
  });
});

test("should generate setEndDate action object", () => {
  const testEndtDate = momemnt();
  const action = setEndDate(testEndtDate);

  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: testEndtDate
  });
});
