import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

/**
 * 高阶组件中的withRouter
 * 作用是将一个组件包裹进Route里面, 然后react-router的三个对象
 * history, location, match就会被放进这个组件的props属性中
 */
class Header extends Component {
  // 回退
  back = () => {
    this.props.history.goBack()
  }

  // 前进
  forward = () => {
    this.props.history.goForward()
  }

  // 1 前进一步 -1 后退一步
  go = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>Go</button>
      </div>
    )
  }
}
export default withRouter(Header)
