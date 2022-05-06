import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
        const { owner = "Cambiami" } = this.props;
        const d = new Date();
        let year = d.getFullYear()-1;
    return (
    <footer>
        <p><small>&copy; {year} {owner}</small></p>
    </footer>
    )
  }
}
