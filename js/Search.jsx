// @flow

import React from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

const Search = (props: {
  shows: Array<Show>,
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  handlerSearchTermChange: Function
}) => (
  <div className="search">
    <Header
      showSearch
      searchTerm={props.searchTerm}
      handlerSearchTermChange={props.handlerSearchTermChange}
    />
    <div>
      {props.shows
        .filter(show =>
          `${show.title} ${show.description}`
            .toUpperCase()
            .includes(props.searchTerm.toUpperCase())
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

export default Search;
