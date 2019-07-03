import React, { Component } from 'react'

export default class Balance extends Component {
  render() {
    return (
      <div>
        ${ this.props.currentBalance }
        <br />
        Total amount
      </div>
    )
  }
}
