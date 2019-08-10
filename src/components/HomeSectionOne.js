import React, { Component } from 'react'
import '../styles/homePage/sectionOne.scss';

export default class SectionOne extends Component {
  render () {
    return (
    <div className= "app">
      <div className="sectionOne">
        <div className="left">
          <h1>A modern social way to save </h1>
            <h1 className='p-left'>
              Going by various names around the world <i>Sou-sou</i>,<i>Partna</i>, <i>Tanda</i>.
              <br />
              <br />
              <b>PAYOUT</b> is a modern way to save money for the expected and upexpected.
              With <b>PAYOUT</b> you create the group(s). With <b>PAYOUT</b> as the banker.There is no need to physically collect money anymore. 
              Money is collected weekly from each group member and avalaible to the designated member the same day money it's collected. 

            </h1>
              <svg width="218" height="160" viewBox="0 0 724 672" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="87.336%" y1="7.447%" x2="66.279%" y2="44.56%" id="hero-shapes-a">
                            <stop stopColor="#A3A9F1" offset="0%"/>
                            <stop stopColor="#6A72E4" offset="100%"/>
                        </linearGradient>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-shapes-b">
                            <stop stopColor="#82DDFC" offset="0%"/>
                            <stop stopColor="#0181F6" offset="100%"/>
                        </linearGradient>
                    </defs>
                      <path d="M675.09 555.602c101.344 0-138.133-250.973-138.133-352.317S664.223.91 562.879.91C461.535.91.543 80.5.543 181.844S573.746 555.602 675.09 555.602z" fill="url(#hero-shapes-a)"/>
                      <path d="M667.21 644.029c111.82-59.115-15.77-185.344-15.77-321.482 0-136.138-.284-340.372-136.422-321.106C378.88 20.708 433.487 224.707 85.874 306.688c-347.614 81.98 469.517 396.456 581.336 337.34z" transform="matrix(-1 0 0 1 723.483 15)" fill="url(#hero-shapes-b)"/>
                      <path d="M532.631 556.964c23.168-12.535-176.81-30.951-173.117-8.023-16.445-27.256-.668 111.452-1.357 97.18-17.805 14.436 202.398 23.384 180.678 25.205 4.694-22.81 13.508-143.183-15.392-139.49-1.105-3.22 20.111-5.785 9.188 25.128" fill="#FFE5F1"/>
                      <path d="M500.754 531.682c23.168-12.535-176.81-30.95-173.117-8.023-16.445-27.256-.668 111.452-1.357 97.18-17.805 14.436 202.398 23.384 180.678 25.205 4.694-22.809 13.508-143.183-15.392-139.49-1.105-3.219 20.111-5.785 9.188 25.128m-1.834 1.51c22.705-12.117 22.727 86.08 26.346 108.244-16.116-26.348-196.655-8.263-197.329-22.06-17.45 13.955 2.35-93.395-18.937-91.634 4.601-22.049 209.238-22.41 180.916-18.84" fill="#FF6DB1"/>
                </svg>
           </div>
        <img  alt="friends" className="right" style={{width: '506px', height: '480px'}} src={'https://cdn.dribbble.com/users/406059/screenshots/3017368/salesforce_dribbble.gif'}/>
       </div>
      </div>
    )
  }
}