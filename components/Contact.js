import React, { Component } from 'react'


export default class Contact extends Component {
  componentDidMount() {
    document.body.style.backgroundColor='goldenrod'
  }
  render() {
    return (
      <div>
        <h1>Contact Me!</h1>
        <p>email: bennie@pittbull.com</p>
      </div>
    )
  }
}
