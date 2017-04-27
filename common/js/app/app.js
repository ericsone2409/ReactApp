// Main App file; Here is were you should call all your components and styles

// React
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'

// Styles
import '../../css/components/normalize.css'
import '../../css/components/style.css'

// Compornents
import Landing from './components/landing.js'
import Search from './components/Search.js'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
