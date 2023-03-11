import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ENavLink from '@/components/ENavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <ENavLink replace to="/home/news">
                News
              </ENavLink>
            </li>
            <li>
              <ENavLink replace to="/home/message">
                Message
              </ENavLink>
            </li>
          </ul>
        </div>
        {/* 注册路由 */}
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    )
  }
}
