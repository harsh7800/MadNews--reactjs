import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.scss";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9490ad46bcd340a493ee58d64b26b413&page=1&pageSize=${this.props.pageSize}`;
this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    });
  }

  handleClickPrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9490ad46bcd340a493ee58d64b26b413&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  handleClickNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9490ad46bcd340a493ee58d64b26b413&page=${ this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  render() {
    return (
      <div className="newsitem-container">
        <h1>MadNews - Top Headlines</h1>
        {this.state.loading&& <Spinner/>}
        <div className="newsRow">
          {!this.state.loading&& this.state.articles.map((element) => {
            return (
              <div className="newsCol" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 70) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="button-container">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleClickPrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleClickNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
