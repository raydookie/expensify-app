import React from "react";
import { connect } from "react-redux";

import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
  state = { calendarFocused: null };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => this.setState({ calendarFocused });

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          onChange={e => {
            const selectedOption = e.target.value;
            selectedOption === "date"
              ? this.props.dispatch(sortByDate())
              : this.props.dispatch(sortByAmount());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="startDate"
          endDate={this.props.filters.endDate}
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          hideKeyboardShortcutsPanel={true}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // grab all the filters from the state
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
