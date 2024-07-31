import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-dark text-light">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
