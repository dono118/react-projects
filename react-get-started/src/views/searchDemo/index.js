import React, { Component } from 'react'
import Search from './Search'
import List from './List'

export default class SearchDemo extends Component {
  state = {
    users: [], // 初始化数据
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '' // 存储请求相关的错误信息
  }

  // 更新state
  updateSearchState = stateObj => {
    this.setState(stateObj)
  }

  render() {
    // const { users } = this.state
    return (
      <div className="container">
        <Search updateSearchState={this.updateSearchState} />
        <List {...this.state} />
      </div>
    )
  }
}
