import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { setSearchTerm } from './actionCreators'

const { string, func, object } = React.PropTypes
const Landing = React.createClass({
  contextTypes:{
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handlerSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  },
  handlerSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handlerSearchSubmit}>
          <input value={this.props.searchTerm} onChange={this.handlerSearchTermChange} type='text' placeholder='Search' />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    )     
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
/* Stateless Component
const Landing = (props) => {
	return (
		<div className='landing'>
			<h1>svideo</h1> 
			<input type='text' placeholder='Search' />
			<Link to='/search'>or Browse All</Link>
		</div>
	)
} */
