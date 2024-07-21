import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
              <div className="col-md-4">
                  <NewsItem title ="Smart watch" desc = "The best smart watch"/>
              </div>

              <div className="col-md-4">
                <NewsItem title = "Smart watch 2" desc="Another version of smart watch"/>
              </div>

              <div className="col-md-4">
                <NewsItem/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <NewsItem/>
              </div>
              <div className="col-md-4">
                <NewsItem/>
              </div>
              <div className="col-md-4">
                <NewsItem/>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default News
