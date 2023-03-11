import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'
import './style.less'

export default class List extends Component {
  state = {
    users: [], // 初始化数据
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '' // 存储请求相关的错误信息
  }

  componentDidMount = () => {
    this.token = PubSub.subscribe('github-search', (_, stateObj) => {
      this.setState(stateObj)
    })
    console.log(this.token)
  }

  componentWillUnmount = () => {
    PubSub.unsubscribe(this.token)
    this.setState = () => false
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
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
