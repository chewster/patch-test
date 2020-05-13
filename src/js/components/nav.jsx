import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Nav extends Component {
    render() {
        return (
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar">
              <ul className="nav-items">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
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
        );
    }
}