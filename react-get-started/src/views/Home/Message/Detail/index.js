import React, { Component } from 'react'

const rawData = [
  { id: '01', title: '消息1', content: '你好，React！' },
  { id: '02', title: '消息2', content: '你好，世界！' },
  { id: '03', title: '消息3', content: '你好，未来！' }
]
export default class Detail extends Component {
  render() {
    // console.log(this.props)
    // 接收params参数
    const { id } = this.props.match.params

    // 接收search参数
    // const { search } = this.props.location
    // const params = new URLSearchParams(search)
    // const id = params.get('id')

    // 接收state参数
    // const { id } = this.props.location.state || {}

    const msg = rawData.find(item => item.id === id) || {}
    return (
      <div>
        <ul>
          <li>ID:{msg.id}</li>
          <li>TITLE:{msg.title}</li>
          <li>CONTENT:{msg.content}</li>
        </ul>
      </div>
    )
  }
}
