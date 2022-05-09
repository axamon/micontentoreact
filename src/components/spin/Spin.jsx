import React, { Component } from 'react'
import './Spin.css';
// import './Spin.css.map';


export default class Spin extends Component {
  render() {
    return (
        <div class="orbit spin">
            <div class="center-image">
          <img src="assets/woman.png" alt="" />
          <img src="assets/man.png" alt="" />
            </div>
            <ul>
            <li>
                <div><img src="assets/analytics.svg" alt=""/></div>
                <p>Salute</p>
            </li>
            <li>
                <div><img src="assets/calendar.svg" alt=""/></div>
                <p>Istruzione</p>
            </li>
            <li>
                <div><img src="assets/person.svg" alt=""/></div>
                <p>Spiritualità</p>
            </li>
            <li>
                <div><img src="assets/finger-print.svg" alt=""/></div>
                <p>Affetti</p>
            </li>
            <li>
                <div><img src="assets/coconut.svg" alt=""/></div>
                <p>Viaggi</p>
            </li>
            <li>
                <div><img src="assets/logout.svg" alt=""/></div>
                <p>Natura</p>
            </li>
            <li>
                <div><img src="assets/plane-1.svg" alt=""/></div>
                <p>Famiglia</p>
            </li>
            <li>
                <div><img src="assets/law.svg" alt=""/></div>
                <p>Società</p>
            </li>
            </ul>
        </div>
    )
  }
}
