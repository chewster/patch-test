import React, { Component } from "react";

export default class Stocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itesms: [],
            error: null,
            isLoading: false,
        };
    }
    
    componentDidMount() {
        this.setState({ isLoading: true });
        let todaysDate = getCurrentDate(),
          API_KEY = "GARvl5UYhUURDgJ4d8yPClNdMPn6Hexg7sMm4LEQ44yFanNNfJrHkQh6uAvo",
          STOCKS_API = "https://api.worldtradingdata.com/api/v1/forex_history?base=USD&convert_to=GBP&api_token=" + API_KEY;
        fetch(NEWS_API)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } 
                else {
                    throw new Error(
                        "Something went wrong ... no data found"
                    );
                }
            })
            .then((data) =>
                this.setState({
                    items: data.history,
                    isLoading: false,
                })
            )
            .catch((error) =>
                this.setState({ error, isLoading: false })
            );
    }
        
    render() {}
}