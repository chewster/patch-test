import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./news.scss";

export function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export default class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: null,
      isLoading: false    
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const url = new URL(
      "https://api.worldtradingdata.com/api/v1/forex_history"
    );

    let params = {
      "base": "USD",
      "convert_to": "GBP",
      "api_token": "GARvl5UYhUURDgJ4d8yPClNdMPn6Hexg7sMm4LEQ44yFanNNfJrHkQh6uAvo",
    }, 
    jsonResult, 
    testObj =  [];
    Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));

    fetch(url, {
      method: "GET",
    })
    .then(response => response.json())
    .then((json) => testObj.push(json.history));
    console.log("testing"); 
    //testObj = JSON.parse(jsonResult[]); 
    console.log(testObj);
    console.log(testObj[0])
  }
  render() {
        const { items, isLoading, error } = this.state;
        if (error) {
          return <p>{error.message}</p>;
        }

        if (isLoading) {
          return <p>Loading ...</p>;
        } else {
          return (
            <section>
              testing
            </section>
          );
        }
  }
}
