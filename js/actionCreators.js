// @flow

import Axios from "axios";
import { SET_SEARCH_TERM, CLEAR_SEARCH_TERM, ADD_API_DATA } from "./actions";

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function clearSearchTerm() {
  return { type: CLEAR_SEARCH_TERM, payload: "" };
}

export function addAPIData(apiData: Show) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(imdbID: string) {
  return (dispatch: Function) => {
    Axios.get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error("axios error", error); // eslint-disable-line no-console
      });
  };
}
