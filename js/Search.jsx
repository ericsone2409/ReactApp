// @flow

import React from "react";
import { connect } from "react-redux";
import ShowCard from "./ShowCard";
import Header from "./Header";

const Search = (props: {
  shows: Array<Show>,
  searchTerm: string // eslint-disable-line react/no-unused-prop-types
}) => (
  <div className="search">
    <Header showSearch />
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

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(Search);
