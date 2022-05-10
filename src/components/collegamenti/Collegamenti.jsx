import React, { Component } from 'react'
import './Collegamenti.css';

export default class Collegamenti extends Component {
  render() {
    return (
      <div className='collegamenti'>
        <span><a  href="#Contatti">Contatti</a>  | </span>
        <span><a  href="#Sportello">Sportello</a> |  </span>
        <span><a  href="#GPT">GPT</a></span>
      </div>
    )
  }
}
