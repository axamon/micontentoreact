import React, { Component } from 'react'
import './Circolo.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faHomeAlt, faDesktop, faCross, faSchool, faBook, faChild } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export default class Circolo extends Component {
  render() {
    return (
    <div class="circolo-wrapper"> 
        <div class="circolo deg-0">
                <a href="#gpt"><FontAwesomeIcon icon={faChild} /></a>
        </div> 
        <div class="circolo deg-45">
                <FontAwesomeIcon icon={faHeart} />
        </div> 
        <div class="circolo deg-90">
                <FontAwesomeIcon icon={faBook} />
        </div> 
        <div class="circolo deg-135">
                <FontAwesomeIcon icon={faSchool} />
        </div> 
        <div class="circolo deg-180">
                <FontAwesomeIcon icon={faCross} />
        </div> 
        <div class="circolo deg-225">
                <FontAwesomeIcon icon={faDesktop} />
        </div> 
        <div class="circolo deg-270">
                <FontAwesomeIcon icon={faHomeAlt} />
        </div> 
        <div class="circolo deg-315">
                <FontAwesomeIcon icon={faBowlFood} />
        </div> 
    </div>  
    )
  }
}
