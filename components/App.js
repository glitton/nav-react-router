import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default class App extends Component {
  render() {
    return (
      <div id='app-container'>
        <BrowserRouter>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </BrowserRouter>

      </div>
    )
  }
}