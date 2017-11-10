import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from '../Home/Home'
import Channel from '../Channel/Channel'

const App = (props) => {
  return (
    <Router>
      <div className='appContainer'>
        <Route exact path='/' component={Home} />
        <Route path='/:channel' component={Channel} />
        <Route path='/user/:id' component={Home} />
      </div>
    </Router>
  )
}

export default App
