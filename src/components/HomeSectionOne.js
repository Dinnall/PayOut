import React, { Component } from 'react'
import '../styles/homePage/sectionOne.scss';

export default class SectionOne extends Component {
  render () {
    return (
    <div className= "app">
      <div className="sectionOne">
        <div className="left">
          <h1>A modern social way to save </h1>
          <h1 class='p-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscin elit. 
            Pellentesque cursus rhoncus felis ac sagittis. 
            Nulla est metus, posuere ac iaculis vitae, porta id turpis. 
            Morbi tristique sed nunc sit amet posuere. </h1>
           </div>
        <img  alt="friends" className="right" style={{width: '506px', height: '480px'}} src={'https://cdn.dribbble.com/users/406059/screenshots/3017368/salesforce_dribbble.gif'}/>
       </div>
      </div>
    )
  }
}