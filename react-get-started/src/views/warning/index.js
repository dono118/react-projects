import React, { Component } from 'react'
import WarningBanner from 'components/warningBanner'
import Mailbox from 'components/mailbox'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWarning: true
    }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    const { showWarning } = this.state
    const messages = ['React', 'Re: React', 'Re:Re React']
    return (
      <div>
        <Mailbox unreadMessages={messages} />
        <WarningBanner warn={showWarning} />
        <button onClick={this.handleToggleClick}>
          {showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}
