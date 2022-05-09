import React, { Component } from 'react'
import './Arco.css';
import image  from './element.png';

export default class Arco extends Component {
  render() {
    return (
    <div className='mt-5 pt-4'>
        <div className='stop container-fluid' id="parent">
            <div className='circle deg-45' id="child"><img src={image} /></div>
            <div className='circle deg-45' id="child"><img src={image} /></div>
            <div className='circle deg-45' id="child"><img src={image} /></div>
            <div className='circle deg-45' id="child"><img src={image} /></div>
        </div>
      
    </div>
    )
  }
}
