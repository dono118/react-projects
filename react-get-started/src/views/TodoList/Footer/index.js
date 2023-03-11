import React, { Component } from 'react'
import './style.less'

export default class index extends Component {
  // 全选/全不选
  handleCheckAll = event => {
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除所有已完成任务
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    // 已完成的个数
    const doneCount = todos.reduce(
      (pre, item) => (item.done ? pre + 1 : pre),
      0
    )
    // 总个数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={total && doneCount === total ? true : false}
          />
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    )
  }
}
