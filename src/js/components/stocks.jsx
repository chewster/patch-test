import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

export default class Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
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
    xAxis =[], 
    yAxis =  [], 
    testObj =[];
    Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));
    console.log(url);
    console.log(url.href);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      /*
    .then((json) => Object.keys(json.history).forEach(function (key) {
      yAxis.push(json.history[key]);
    }));
    */
    .then((json) => Object.keys(json.history).forEach(key => testObj.push({ date: key, value: json.history[key] })));
    console.log("tsting something here");
    console.log(testObj.length);
    for (var i = 0; i < testObj.length; i++) {
      console.log("looping thoughthe array");
      xAxis.push(testObj[i].date); 
      yAxis.push(testObj[i].value);
    }
    testObj.forEach(element => {
      xAxis.push(element.date);
    });
    console.log("testing"); 
    console.log(testObj);
    console.log(yAxis);
    console.log(xAxis);
  }
  render() {
        return (
          <div>
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        );
    
    /*
    		const options = {
          animationEnabled: true,
          exportEnabled: true,
          theme: "light2", // "light1", "dark1", "dark2"
          title: {
            text: "USD to Sterling",
          },
          axisY: {
            title: "Bounce Rate",
            includeZero: false,
            suffix: "%",
          },
          axisX: {
            title: "USD",
            prefix: "W",
            interval: 2,
          },
          data: [
            {
              type: "line",
              toolTipContent: "Week {x}: {y}%",
              dataPoints: [
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 64 },
                { x: 4, y: 62 },
                { x: 5, y: 64 },
                { x: 6, y: 60 },
                { x: 7, y: 58 },
                { x: 8, y: 59 },
                { x: 9, y: 53 },
                { x: 10, y: 54 },
                { x: 11, y: 61 },
                { x: 12, y: 60 },
                { x: 13, y: 55 },
                { x: 14, y: 60 },
                { x: 15, y: 56 },
                { x: 16, y: 60 },
                { x: 17, y: 59.5 },
                { x: 18, y: 63 },
                { x: 19, y: 58 },
                { x: 20, y: 54 },
                { x: 21, y: 59 },
                { x: 22, y: 64 },
                { x: 23, y: 59 },
              ],
            },
          ],
        };
        return (
          <div>
            testing

          </div>
        );
        */
    /*
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
        */
       
  }
}
