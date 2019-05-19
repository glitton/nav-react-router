import React, { Component } from 'react'
import '../style.css'

export default class Home extends Component {
  componentDidMount() {
    document.body.style.backgroundColor='azure'
  }
  render() {
    return (
      <div>
        <h1>My app</h1>
        <p>Welcome to Bennie's app</p>
      </div>
    )
  }
}
