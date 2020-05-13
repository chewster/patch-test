import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";
import '../../css/news.scss';

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
            isLoading: false, 
            todaysDate: getCurrentDate(),
            searchWord: ''
        };
        this.fetchData = this.fetchData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchData(word) {
        this.setState({ isLoading: true });
        let NEWS_API = 'http://newsapi.org/v2/everything?q=' + word + '&from=' + this.state.todaysDate + '&sortBy=publishedAt&apiKey=f9b70e839a1b47e2a8b11a8ad054ec62';
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

    handleSubmit(event)  {
        event.preventDefault();
        if (this.state.searchWord != '') {
            this.fetchData(this.state.searchWord);
        }
        else {
            alert("No search input please input a search term");
        }
    };
    handleChange(event) {
        this.setState({ searchWord: event.target.value });
    }
    componentDidMount() {
        let search = "today";
        if (this.state.searchWord != null && this.state.searchWord != '') {
            search = this.state.searchWord;
        }
        this.fetchData(search);
    }    
    render() {
        const { articles, isLoading, error, todaysDate, searchWord } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }
        else if (articles == undefined || articles.length== 0) {
            return (
                <section className="colorlib-news" data-section="news">
                    <h2>News of Today {todaysDate} </h2> 
                    NO ARTICLES FOUND
                </section>
            )
        } 
        else {
            return (
                <section className="section-content" data-section="news" id="news"> 
                    <h2>News of Today {todaysDate} </h2> 
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Search"
                            value = {searchWord}
                            onChange={this.handleChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary">submit
                        </button>
                    </form>
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
