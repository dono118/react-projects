import React, { Component } from 'react'

class LoggingButton extends Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性*的语法 (public class fields 语法)。
  handleClick = () => {
    console.log('this is:', this)
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>
  }
}

/**
 * 此语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。
 * 在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，
 * 这些组件可能会进行额外的重新渲染。
 * 我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。
 */
/* class LoggingButton extends Component {
  handleClick() {
    console.log('this is:', this)
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return <button onClick={() => this.handleClick()}>Click me</button>
  }
} */

export default LoggingButton
