import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default class App extends Component {
  render() {
    return <div id='app-container'>
      <Home />
    </div>
  }
}