import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from '../Home/Home'

const App = (props) => {
  return (
    <Router>
      <div className='appContainer'>
        <Route exact path='/' component={Home} />
        <Route path='/:channel' component={Home} />
        <Route path='/user/:id' component={Home} />
      </div>
    </Router>
  )
}

export default App
