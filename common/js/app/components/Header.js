import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import actionCreators from './actionCreators'

const setSearchTerm = actionCreators.setSearchTerm

const { bool, func, string } = React.PropTypes

const Header = React.createClass({
	propTypes:{
		showSearch: bool,
		searchTerm: string,
		dispatch: func
	},
	handleSearchTermChange (event) {
		this.props.dispatch(setSearchTerm(event.target.value))
	},
	render () {
		let utilSpace
		if (this.props.showSearch) {
			utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
		}else{
			utilSpace = (
				<h2>
					<Link to='/search'>Back</Link>
				</h2>
			)
		}
		return (
			<header>
				<h1>
					<Link to='/'>svideo</Link>
				</h1>
				{utilSpace}
			</header>
		)
	}
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)