// Main App file; Here is were you should call all your components and styles

// React
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './components/store'

// Styles
import '../../css/components/normalize.css'
import '../../css/components/style.css'

// Compornents
import Landing from './components/landing.js'
import Search from './components/Search.js'
import Details from './components/Details.js'
import preload from '../../data.json'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match
              pattern='/search' 
              component={(props) => {
                return <Search shows={preload.shows} {...props} />
              }} 
            />
            <Match 
              pattern='/details/:id' 
              component={(props) => {
                const shows = preload.shows.filter((show) => {
                  return (props.params.id === show.imdbID)
                })
                return <Details show={shows[0]} {...props} />
              }} 
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
