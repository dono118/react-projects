import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = () => {
    // 获取用户输入
    let {
      keywordElement: { value: keyword }
    } = this
    keyword = keyword || 'dono'
    // console.log(keyword)
    // 发送请求前更新state
    PubSub.publish('github-search', {
      isFirst: false,
      isLoading: true
    })
    // 发送网络请求
    axios.get(`/api/search/users?q=${keyword}`).then(
      res => {
        // 请求成功
        PubSub.publish('github-search', {
          users: res.data.items,
          isLoading: false
        })
      },
      err => {
        // 请求失败
        PubSub.publish('github-search', {
          err,
          isLoading: false
        })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users By PubSub</h3>
        <div>
          <input
            ref={c => (this.keywordElement = c)}
            type="text"
            style={{ width: '60%' }}
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
