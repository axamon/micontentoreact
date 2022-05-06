import React, { Component } from 'react'

export default class Title extends Component {

  render() {
    const { titolo = "Titolo" } = this.props;
    return (
      <div>{titolo}</div>
    )
  }
}
