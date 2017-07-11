// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string
};

declare var module: {
  hot: { accept(path: string, callback: () => void): void }
};

declare type setSearchAction = "SET_SEARCH_TERM";
declare type clearSearchAction = "CLEAR_SEARCH_TERM";

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action =
  | ActionT<"SET_SEARCH_TERM", string>
  | ActionT<"CLEAR_SEARCH_TERM", string>;
