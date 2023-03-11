import React, { Component } from 'react'
import Item from '../Item'
import './style.less'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
    return (
      <div className="row">
        {isFirst ? (
          <h2>Welcome!</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err.message}</h2>
        ) : (
          users &&
          users.map(item => {
            return <Item key={item.id} {...item} />
          })
        )}
      </div>
    )
  }
}
