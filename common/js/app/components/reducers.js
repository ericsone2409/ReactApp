import actions from './actions'

const DEFAULT_STATE = {
	searchTerm: ''
}


//tipico reducer
const setSearchTerm = (state, action) => {
	const newState = {}
	Object.assign(newState, state, {searchTerm: action.searchTerm})
	return newState
}
//state = DEFAULT_STATE -> esto quiere decir if(!state){state = DEFAULT_STATE;}
const rootReducer = (state = DEFAULT_STATE, action) => {

	switch (action.type) {
		case actions.SET_SEARCH_TERM:
			return setSearchTerm(state, action)
		default:
			return state
	}
}

export default rootReducer;
