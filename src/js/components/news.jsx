import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";
import './news.scss';

export function getCurrentDate(separator = '-') {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            error: null,
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        let todaysDate = getCurrentDate(),
          searchWord = "today",
          //NEWS_API = 'http://newsapi.org/v2/everything?q='+ searchWord +'&from=' + todaysDate +'&sortBy=publishedAt&apiKey=f9b70e839a1b47e2a8b11a8ad054ec62'
         NEWS_API = "http://newsapi.org/v2/everything?q=covid&from=2020-05-12&sortBy=publishedAt&apiKey=f9b70e839a1b47e2a8b11a8ad054ec62"; //this is only for latenight testing  
        console.log("testing the mounting"); 
        console.log(NEWS_API); 
        fetch(NEWS_API)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ... no data found');
                }
            })
            .then(data => this.setState({ articles: data.articles, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }    
    render() {
        const { articles, isLoading, error } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }
        else if (articles == undefined || articles.length== 0) {
            return (
                <section>
                    <h2>News of Today</h2> 
                    NO ARTICLES FOUND
                </section>
            )
        } 
        else {
            return (
                <section> 
                    <h2>News of Today</h2> 
                    <Carousel className = "news-carousel" itemsToShow={3}>
                        {articles.map(article =>
                        <div className="article">
                            <span className="title">{article.title}</span>
                            <img src={article.urlToImage}></img>
                            <span className="description">{article.description}</span>
                        </div>

    
                        )}
                    </Carousel>
                </section>

            );
        }
    }
}
