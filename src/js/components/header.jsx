import React, { Component } from "react";
import '../../css/header.scss'

export default class Introduction extends Component {
    render() {
        return (
          <header className="heder">
            <h1>Christina Chiu</h1>
            <span>this is my patch.com coding assessment</span>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        );
    }
} 