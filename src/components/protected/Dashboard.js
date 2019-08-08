import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        Dashboard. This is a protected route. You can only see this if you're authed.
       <Link to="/smile" className="navbar-brand">Smile</Link>

      </div>
    )
  }
}