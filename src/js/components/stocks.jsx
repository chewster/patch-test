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
      isLoading: false,
      jsonResult: {}
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
 /*
    const url = new URL(
      "https://api.worldtradingdata.com/api/v1/forex_history"
    );
    let params = {
      "base": "USD",
      "convert_to": "GBP",
      "api_token": "GARvl5UYhUURDgJ4d8yPClNdMPn6Hexg7sMm4LEQ44yFanNNfJrHkQh6uAvo",
    };
    Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));
    
    console.log("tesing in here");
    console.log(url);
    console.log(url.href);

    fetch(url, {method: "GET"})
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ... no data found");
        }
      })
      .then((data) =>
        this.setState({ items: data, isLoading: false })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
      console.log(this.state.items);
      console.log(this.state.error);
      console.log(data);
      */
    const url = new URL(
      "https://api.worldtradingdata.com/api/v1/forex_history"
    );

    let params = {
      "base": "USD",
      "convert_to": "GBP",
      "api_token": "GARvl5UYhUURDgJ4d8yPClNdMPn6Hexg7sMm4LEQ44yFanNNfJrHkQh6uAvo",
    };
    Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));

    fetch(url, {
      method: "GET",
    })
    .then(response => response.json())
    .then((json) => 
      this.setState({ 
        jsonResult: json.history, 
        isLoading: false}
    ))
    //.then(json => console.log( json.history));
    console.log("testing"); 
    console.log(this.state.jsonResult);
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
