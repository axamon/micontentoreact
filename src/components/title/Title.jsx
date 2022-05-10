import React, { Component } from 'react'
import "./Title.css";

export default class Title extends Component {

  render() {
    const { titolo = "Titolo" } = this.props;
    return (
      <div className='titolo'><a href="#">{titolo}</a></div>
    )
  }
}
