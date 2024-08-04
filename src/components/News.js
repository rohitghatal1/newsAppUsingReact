import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();
    console.log("hello I am constructor form news component");
    this.state = {
      articles: [],
      loading:false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=apple&from=2024-07-31&to=2024-07-31&sortBy=popularity&apiKey=13ea314698ae4fd6966b5f94ddde14a8&page=1&pageSize=30";
    this.setState({
      loading:true
    });
    let data = await fetch(url);
    let fetchedData = await data.json();
    this.setState({
      articles: fetchedData.articles,
      loading:false
    })
  }

  handlePrevious = async()=>{
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-07-31&to=2024-07-31&sortBy=popularity&apiKey=13ea314698ae4fd6966b5f94ddde14a8&page=${this.state.page - 1}&pageSize=30`;
    this.setState({
      loading:true
    });
    let data = await fetch(url);
    let fetchedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: fetchedData.articles,
      loading:false
    })
  }
  handleNext = async()=>{
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-07-31&to=2024-07-31&sortBy=popularity&apiKey=13ea314698ae4fd6966b5f94ddde14a8&page=${this.state.page + 1}&pageSize=30`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let fetchedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: fetchedData.articles,
      loading:false
    })
  }
  render() {
    return (
      <div>
        <h3 className='container text-center'>Top Headlines</h3>
        {this.state.loading && <Spinner/>}
        <div className="container mt-5">
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl ={element.url} />
              </div>

            })}
          </div>
          <div className="container d-flex justify-content-between mt-3 py-3">
            <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevious}>&larr; Previous</button>
            <button className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
