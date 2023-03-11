import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { html_url, avatar_url, login } = this.props
    return (
      <div className="card">
        <a href={html_url} rel="noreferrer" target="_blank">
          <img src={avatar_url} style={{ width: '100px' }} alt="avatar" />
          <p className="card-text">{login}</p>
        </a>
      </div>
    )
  }
}
