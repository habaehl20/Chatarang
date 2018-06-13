import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn fomr './SignIn'

class App extends Component {
  constructor(){
    super()

    this.state = {
      user: {},
    }
  }
  // state = {
  //   user: {
  //     uid: null,
  //     userName: null,
  //     email: null, 
  //   }
  // }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))
  }
  handleAuth = (user) => {
    this.setState({ user })
    localStorage.setItem('user',JSON.stringify(user))
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    this.setState({ user: {} })
    localStaoragen.removeItem('user')
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
          ? <Main user={this.state.user} />
          : <SignIn handleAuth={this.handleAuth}/>
        }
        <SignIn />
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
