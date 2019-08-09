import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'
import '../styles/login.scss';



function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  render () {
    return (
      <div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h3> Login </h3>
          <div>
            <label>Email</label>
            <input  
            ref={(email) => this.email = email} 
            placeholder="Email"
            className=""
            />

          </div>
          <div >
            <label>Password</label>
            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            <div role="alert">
              <span  aria-hidden="true"></span>
              <span >Error:</span>
              &nbsp;{this.state.loginMessage} 
              <a href="/#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
          <button className="button-sign-in" type="submit">Login</button>
        </form>
      </div>
    )
  }
}
