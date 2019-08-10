import React, { Component } from 'react'
import { auth } from '../helpers/auth'
import '../styles/login.scss';


function setErrorMsg(error){
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h3>Register</h3>
            <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span aria-hidden="true"></span>
              <span>Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="button-log-out" >Register</button>
        </form>
      </div>
    )
  }
}
