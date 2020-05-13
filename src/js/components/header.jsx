import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../../css/header.scss'

export default class Introduction extends Component {
    render() {
        return (
        <header className="header section-content" id="home">
          <div className="content">
            <h1>Christina Chiu</h1>
            <span>This is my patch.com coding assessment.</span>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar">
                <ul className="nav-items">
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="news"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClass="active"
                      to="stocks"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Stocks
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            </div>
          </header>
        );
    }
} 