import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import '.../styles/dashboard.scss';


export default class Dashboard extends Component {
  render () {
    return (
      <div className="dashboard">
        Dashboard. This is a protected route. You can only see this if you're authed.
       <Link to="/smile" className="navbar-brand">Smile</Link>

      </div>
    )
  }
}