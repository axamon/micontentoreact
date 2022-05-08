import React, { Component } from 'react'
import './Crowdfunding.css';

export default class Crowdfunding extends Component {
  render() {
    return (
        <div className='crowdfunding'><button onClick={()=> window.open("https://www.kickstarter.com/", "_blank")} class="button-53" role="button" placeholder="Crowdfunding">Crowdfunding</button></div>
    )
  }
}
