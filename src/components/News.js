import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.scss";

export default class News extends Component {

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=9490ad46bcd340a493ee58d64b26b413&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  handleClickPrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9490ad46bcd340a493ee58d64b26b413&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    }); 
  }

   handleClickNext = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9490ad46bcd340a493ee58d64b26b413&page=${
      this.state.page + 1
    } &pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    }); 
  }

  render() {
    return (
      <div className="newsitem-container">
        <h1>MadNews - Top Headlines</h1>
        <div className="newsRow">
          {this.state.articles.map((element) => {
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
          <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleClickPrevious}>
           &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handleClickNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
