import React, { Component } from 'react'
import SectionOne from '../HomeSectionOne.js';
import '../../styles/home.scss';



export default class HomePage extends Component {
  render () {
    return (
      <div className="home">
        <SectionOne />
      </div>
    )
  }
}