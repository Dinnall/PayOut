import React, { Component } from 'react'
import '../styles/homePage/sectionThree.scss';

export default class SectionThree extends Component {
  render () {
    return (
    <div>
            <footer class="site-footer">
            <div class="container">
                <div class="site-footer-inner">
                    <div class="brand footer-brand">
                                <title>PAYOUT</title>
                                <defs>
                                    <linearGradient x1="97.927%" y1="0%" x2="1.669%" y2="0%" id="logo-footer-a">
                                        <stop stop-color="#82DDFC" offset="0%"/>
                                        <stop stop-color="#0181F6" offset="100%"/>
                                    </linearGradient>
                                    <linearGradient x1="96.64%" y1="1.497%" x2="0%" y2="44.56%" id="logo-footer-b">
                                        <stop stop-color="#A3A9F1" offset="0%"/>
                                        <stop stop-color="#6A72E4" offset="99.203%"/>
                                        <stop stop-color="#6A6FEC" offset="100%"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0 16h8a8 8 0 1 0 16 0h8c0 8.837-7.163 16-16 16S0 24.837 0 16z" fill="url(#logo-footer-a)"/>
                                <path d="M12 0h8a8 8 0 1 0 16 0h8c0 8.837-7.163 16-16 16S12 8.837 12 0z" fill="url(#logo-footer-b)" transform="rotate(180 28 8)"/>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                            <a href="#section">Contact</a>
                        </li>
                        <li>
                            <a href="#section">About us</a>
                        </li>
                        <li>
                            <a href="#section">FAQ's</a>
                        </li>
                    </ul>
                    <div class="footer-copyright">&copy; 2019 PAYOUT, all rights reserved</div>
                </div>
            </div>
        </footer>

    </div>
    )
  }
}