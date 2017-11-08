import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from '../Home/Home'

const App = (props) => {
  return (
    <div className='appContainer'>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </div>
  )
}

export default App
