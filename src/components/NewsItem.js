import React from "react";

const NewsItem = (props)=> {
  let { title, description, imageUrl, newsUrl, author, date, source } = props; 
    return (
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://images.all-free-download.com/images/graphicwebp/error_404_page_not_found_6845510.webp"
              : imageUrl
          }
          className="card-img-top"
          alt="News-Img"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>{" "}
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "95%",zIndex: "1" }}>
            {source}
          </span>
          <p className="card-text">{description}...</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target={"_blank"}
            className="btn btn-sn btn-primary"
          >
            Read more
          </a>
          <p className="card-text" style={{fontWeight: 700 , fontSize: "1.1em", marginTop: "1em"}}>
            <small className="text-muted">
              By {!author ? "Unknown" : author} <br /> Published on{" "}
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
        </div>
      </div>
    );
}

export default NewsItem
