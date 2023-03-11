import React, { Component } from 'react'

// 高阶组件
function withMouse(WrappedComponent) {
  class Mouse extends Component {
    state = {
      x: 0,
      y: 0
    }

    handleMouse = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouse)
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouse)
    }

    render() {
      return <WrappedComponent {...this.state}></WrappedComponent>
    }
  }
  return Mouse
}

const Position = props => {
  return (
    <p>
      鼠标当前位置(x:{props.x},y:{props.y})
    </p>
  )
}

// 获取增强后组件
const MousePosition = withMouse(Position)

class HocDemo extends Component {
  render() {
    return (
      <div>
        <h2>高阶组件(HOC)</h2>
        <MousePosition></MousePosition>
      </div>
    )
  }
}

export default HocDemo
