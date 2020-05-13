import React, { Component } from "react";
import {Line} from 'react-chartjs-2';

var state = {
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
      isLoading: false,
      graphData: {
        labels: [],
        datasets: [
          {
            label: "Rainfall",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [],
          },
        ],
      },
    };
  }

  handleResponse (response) {
    let xAxis = [],
      yAxis = [],
      testResponse = [];
    Object.keys(response).forEach(key => testResponse.push({ date: key, value: response[key] }));
    xAxis = testResponse.map((item) => item["date"]);
    yAxis = testResponse.map((item) => item['value']);
    let testDataset = [
      {
        label: "USD",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        data: yAxis,
      },
    ]; 
    this.setState({graphData:{['labels']: xAxis}});
    this.setState({graphData:{['datasets']: testDataset}})
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    const url = new URL(
      "https://api.worldtradingdata.com/api/v1/forex_history"
    );
    let params = {
      "base": "USD",
      "convert_to": "GBP",
      "api_token": "demo",
      "date_from": "2020-03-22",
      "date_to": "2020-04-04"
    };
    Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => this.handleResponse(json.history))
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  render() {
        const { graphData, isLoading, error } = this.state;
        return (
          <div>
            <Line
              data={graphData}
              options={{
                title: {
                  display: true,
                  text: "USD to GBP",
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
  }
}
