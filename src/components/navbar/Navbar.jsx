import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
        <div className='d-flex justify-content-right'>
        <nav>
            <ul>
            <a href="#Contatti"><li>Contatti</li></a>
                <li><a href="#Sportello">Sportello</a></li>
                <li><a href="#GPT">GPT</a></li>
            </ul>
        </nav>
        </div>
    )
  }
}
