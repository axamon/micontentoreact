import React, { Component } from 'react'
import './Argomento.css';

export default class Argomento extends Component {
  render() {
    const { name = "sezione test", contenuto = "bla bla bla" } = this.props;

    return (
        <div className="argomento" id={name} name={name}>
            <h1>{name}</h1>
            <h6><a href="#">torna su</a></h6>
            <br></br>
            <p>{contenuto}</p>
      </div>
    )
  }
}
