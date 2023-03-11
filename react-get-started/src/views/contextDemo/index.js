import React, { Component } from 'react'

const themes = {
  light: '亮色主题',
  dark: '暗色主题'
}
const sexs = {
  man: '男性',
  wem: '女性'
}
const SexContext = React.createContext(sexs.man)
const ThemeContext = React.createContext(themes.dark)

class ThemeSwitch extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => <button>{value}</button>}
      </ThemeContext.Consumer>
    )
  }
}

class SexSwitch extends React.Component {
  render() {
    let sex = this.context
    return <button>{sex}</button>
  }
}
SexSwitch.contextType = SexContext

class ContextDemo extends Component {
  state = {
    theme: themes.light,
    sex: sexs.wem
  }
  handleSwitch = () => {
    let sex = this.state.sex
    let theme = this.state.theme

    this.setState({
      sex: sex === sexs.man ? sexs.wem : sexs.man,
      theme: theme === themes.dark ? themes.light : themes.dark
    })
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeSwitch />
        </ThemeContext.Provider>
        <SexContext.Provider value={this.state.sex}>
          <SexSwitch />
        </SexContext.Provider>
        <button onClick={this.handleSwitch}>切换</button>
      </div>
    )
  }
}

export default ContextDemo
