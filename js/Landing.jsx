// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import type { RouterHistory } from "react-router-dom";
import { setSearchTerm, clearSearchTerm } from "./actionCreators";

class Landing extends Component {
  props: {
    searchTerm: string,
    handlerSearchTermChange: Function,
    history: RouterHistory,
    goAndClear: Function
  };
  goToSearch = event => {
    event.preventDefault();
    this.props.history.push("/search");
  };
  clearSearchTerm = event => {
    event.preventDefault();
    this.props.goAndClear();
    this.props.history.push("/search");
  };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
            onChange={this.props.handlerSearchTermChange}
          />

        </form>
        <a onClick={this.clearSearchTerm} role="link" tabIndex={0}>
          or Browser All
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handlerSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  goAndClear() {
    dispatch(clearSearchTerm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
