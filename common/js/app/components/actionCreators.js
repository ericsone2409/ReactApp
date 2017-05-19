import actions from './actions'

const actionCreators = {
	setSearchTerm(searchTerm) {
		return { type: actions.SET_SEARCH_TERM, searchTerm: searchTerm }
	}
}

export default actionCreators