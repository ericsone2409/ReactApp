// Main App file; Here is were you should call all your components and styles

// React
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'

// Styles
import '../../css/components/normalize.css'
import '../../css/components/style.css'

// Compornents
import Landing from './components/landing.js'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
