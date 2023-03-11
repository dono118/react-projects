import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default class ENavLink extends Component {
  render() {
    return (
      <NavLink
        activeClassName="nl-active"
        className="list-group-item"
        {...this.props}
      />
    )
  }
}
