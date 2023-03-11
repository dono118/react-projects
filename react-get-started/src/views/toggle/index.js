import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }

    // 为了在回调中使用`this`，这个绑定必不可少的
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}
export default Toggle
