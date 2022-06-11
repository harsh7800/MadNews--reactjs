import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card">
        <img
          src={!imageUrl? "https://images.all-free-download.com/images/graphicwebp/error_404_page_not_found_6845510.webp" : imageUrl}
          className="card-img-top"
          alt="News-Img  "
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a rel="noreferrer" href={newsUrl} target={"_blank"} className="btn btn-sn btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}
