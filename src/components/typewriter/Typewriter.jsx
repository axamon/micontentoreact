import React, { Component } from 'react'
import './Typewriter.css';

export default class Typewriter extends Component {
  render() {
        const { text = "very long text!" } = this.props;
    return (
      <div className='typewriter'>{text}</div>
    )
  }
}
