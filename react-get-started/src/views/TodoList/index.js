import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './style.less'

class TodoList extends Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '睡觉',
        done: true
      },
      {
        id: '003',
        name: '敲代码',
        done: false
      },
      {
        id: '004',
        name: '逛街',
        done: false
      }
    ]
  }

  // 添加todo
  addTodo = todoObj => {
    console.log(todoObj)
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  // 更新todo
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state
    // 匹配处理数据
    const newTodos = todos.map(item => {
      if (item.id === id) return { ...item, done }
      return item
    })
    this.setState({
      todos: newTodos
    })
  }

  // 删除todo
  deleteTodo = id => {
    // 获取状态中的todos
    const { todos } = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter(item => {
      return item.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  // 全选或取消全选
  checkAllTodo = done => {
    // 获取状态中的todos
    const { todos } = this.state
    // 加工数据
    const newTodos = todos.map(item => {
      return { ...item, done }
    })
    // 更新状态
    this.setState({
      todos: newTodos
    })
  }

  // 清除所有已完成todo
  clearAllDone = () => {
    // 获取状态中的todos
    const { todos } = this.state
    // 过滤数据
    const newTodos = todos.filter(item => {
      return !item.done
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <h2>TodoList案例</h2>
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    )
  }
}
export default TodoList
