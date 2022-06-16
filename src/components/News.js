import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./News.scss";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
   const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState(true)
   const [page, setPage] = useState(1)
   const [totalResults, setTotalResults] = useState(0)
     
  
  // const capitaliseFirstLetter = (string) => {
  //    return string.charAt(0).toupperCase() + string.slice(1)
  //  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9490ad46bcd340a493ee58d64b26b413&page=${page}&pageSize=${props.pageSize}`;
    setLoading( true );
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title =  `${props.category} - MadNews`;
    updateNews();
    // eslint-disable-next-line
  }, [])


   const fetchMoreData = async () => {
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9490ad46bcd340a493ee58d64b26b413&page=${page}&pageSize=${props.pageSize}`;
     setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <div className="newsitem-container">
        <h1>MadNews - Top {props.category} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="newsRow">
            {articles.map((element,index) => {
              return (
                <div className="newsCol" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
}


News.defaultProps = {
  pageSize: 4,
  country: "in",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  page: PropTypes.number,
  category: PropTypes.string,
};

export default News
  
