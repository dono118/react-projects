import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './style.less'

export default class index extends Component {
  // 对接受的props进行类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 处理input enter事件
  handleKeyUp = event => {
    // 解构赋值获取keyCode, target
    const { keyCode, target } = event
    // 判断是否是回车键
    if (keyCode !== 13) return
    // 判断输入值是否为空
    if (target.value.trim() === '') {
      alert('任务名称不能为空')
      return
    }
    // 准备好一个todo对象
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    // 将todoObj传递给父组件
    this.props.addTodo(todoObj)
    // 清空输入框内容
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入您的任务名称，按回车键确认"
        />
      </div>
    )
  }
}
