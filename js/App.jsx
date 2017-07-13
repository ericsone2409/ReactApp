// @flow

import React from "react";
import { Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Selector from "./Selector";
import Details from "./Details";
import preload from "../data.json";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <div className="app">
    <Switch>
      <Selector shows={preload.shows} />
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

export default App;
