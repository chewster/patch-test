import React, { Component } from "react";
import "./App.css";
import Header from "./js/components/header.jsx";
import Introduction from "./js/components/introduction.jsx";
import News from "./js/components/news.jsx";
import Stocks from "./js/components/stocks.jsx"

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <div id="colorlib-main">
            <Header></Header>
            <Introduction></Introduction>
            <News></News>
            <Stocks></Stocks>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
