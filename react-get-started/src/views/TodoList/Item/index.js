import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

export default class index extends Component {
  // 对接受的props进行类型、必要性的限制
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  state = {
    mouse: false
  }
  // 处理鼠标的移入移出事件
  handleMouse = flag => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }

  // 更新todo状态
  handleCheck = id => {
    return event => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 删除todo
  handleDelete = id => {
    if (window.confirm('确定要删除吗？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
