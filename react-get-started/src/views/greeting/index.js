import React, { Component } from 'react'

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

let user
user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function getGreeting(user) {
  if (user) {
    return <div>Hello, {formatName(user)}!</div>
  }
  return <div>Hello, Stranger.</div>
}

const element = getGreeting(user)

export default class index extends Component {
  render() {
    return element
  }
}
