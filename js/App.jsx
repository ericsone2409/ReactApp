// @flow

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  state = {
    searchTerm: ""
  };
  handlerSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };
  clearSearchTerm = () => this.setState({ searchTerm: "" });
  render() {
    return (
      <div className="app">
        <Switch>
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
                shows={preload.shows}
                {...props}
              />
            )}
          />
          <Route
            path="/details/:id"
            component={(props: {
              match: Match // eslint-disable-line react/no-unused-prop-types
            }) => (
              <Details
                show={preload.shows.find(
                  show => props.match.params.id === show.imdbID
                )}
                {...props}
              />
            )}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    );
  }
}

export default App;
