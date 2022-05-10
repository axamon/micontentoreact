import React, { Component } from 'react'
import './Crowdfunding.css';

export default class Crowdfunding extends Component {
  render() {
    return (
        <div onClick={()=> 
          window.open("https://www.kickstarter.com/", "_blank")
        } className='crowdfunding'><button  class="button-53" role="button" placeholder="Crowdfunding">Crowdfunding</button></div>
    )
  }
}
