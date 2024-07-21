import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title, desc} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://www.cnet.com/a/img/resize/770007077c38361ca13ef0b0aa4c208f88fa2053/hub/2023/09/20/9e9b8e2b-04ee-4087-b819-c99ec8bbc980/apple-watch-ultra-2-7.jpg?auto=webp&fit=crop&height=1200&width=1200" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="/" className="btn btn-dark text-light">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
