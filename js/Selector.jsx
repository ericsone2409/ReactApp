// @flow

import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

class Selector extends Component {
  state = {
    searchTerm: ""
  };
  handlerSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };
  clearSearchTerm = () => this.setState({ searchTerm: "" });
  props: {
    shows: Array<Show>
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <Landing
              searchTerm={this.state.searchTerm}
              handlerSearchTermChange={this.handlerSearchTermChange}
              clearSearchTerm={this.clearSearchTerm}
              {...props}
            />
          )}
        />
        <Route
          path="/search"
          render={props => (
            <Search
              searchTerm={this.state.searchTerm}
              handlerSearchTermChange={this.handlerSearchTermChange}
              shows={this.props.shows}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Selector;
