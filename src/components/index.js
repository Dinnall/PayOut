import React, { Component } from 'react'
import '../styles/navbar.scss';

import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import HomePage from './Home/Home.js'
import Dashboard from './protected/Dashboard'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
          <nav id="navbar">
            <div className="nav-wrapper">
              <div className="logo">
                <Link to="/">PAYOUT</Link>
              </div>

              <ul id="menu">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  {this.state.authed
                    ? <button
                        className="logout"
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        >Logout</button>
                    : <span>
                        <li>
                        <Link to="/login" >Login</Link>
                        </li>
                        <li>
                        <Link to="/register" >Register</Link>
                        </li>
                      </span>}
                </li>
              </ul>
            </div>
          </nav>       
              <Switch>
                <Route path='/' exact component={HomePage} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>       
      </BrowserRouter>
    );
  }
}
