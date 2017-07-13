// @flow

import React, { Component } from "react";

class Landing extends Component {
  props: {
    searchTerm: string,
    handlerSearchTermChange: Function,
    history: RouterHistory,
    clearSearchTerm: Function
  };
  goToSearch = (
    event: SyntheticKeyboardEvent & { target: HTMLFormElement }
  ) => {
    event.preventDefault();
    this.props.history.push("/search");
  };
  clearSearchTerm = () => {
    this.props.clearSearchTerm();
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
export default Landing;
