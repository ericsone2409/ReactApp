// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends Component {
	state = {
		searchTerm: ''
	};
	props: {
		shows: Array<Show>
	};
	handlerSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
		this.setState({ searchTerm: event.target.value });
	};

	render() {
		return (
			<div className="search">
				<Header showSearch searchTerm={this.state.searchTerm} handlerSearchTermChange={this.handlerSearchTermChange} />
				<div>
					{this.props.shows
						.filter(show =>
							`${show.title} ${show.description}`.toUpperCase().includes(this.state.searchTerm.toUpperCase())
						)
						.map(show => <ShowCard key={show.imdbID} {...show} />)}
				</div>
			</div>
		);
	}
}

export default Search;
