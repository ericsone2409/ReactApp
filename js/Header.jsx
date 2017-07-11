// @flow

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

const Header = (props: {
  showSearch?: boolean,
  searchTerm: string,
  handlerSearchTermChange: Function
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        type="text"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handlerSearchTermChange}
      />
    );
  } else {
    utilSpace = <h2><Link to="/search">Back</Link></h2>;
  }
  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handlerSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
