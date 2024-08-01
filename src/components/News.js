import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "England vs West Indies LIVE: Second Test, day three, Trent Bridge – cricket score, radio commentary, video highlights and text updates",
      "description": "England host West Indies in the second Test at Trent Bridge – follow text updates, radio commentary and video highlights.",
      "url": "http://www.bbc.co.uk/sport/cricket/live/cxee324rj98t",
      "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      "publishedAt": "2024-07-20T11:22:15.7085833Z",
      "content": "drinks breakTrail by 31\r\nIt's good to see Mark Wood bowling after he forced forced off with what England hoped was just cramp - and that seems to have been the case. He's still hitting 90mph and abov… [+316 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    console.log("hello I am constructor form news component");
    this.state = {
      articles: this.articles
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=apple&from=2024-07-31&to=2024-07-31&sortBy=popularity&apiKey=13ea314698ae4fd6966b5f94ddde14a8";
    let data = await fetch(url);
    let fetchedData = await data.json();
    this.setState({articles: fetchedData.articles})
  }
  render() {
    return (
      <div>
        <h3 className='container text-center'>Top Headlines</h3>
        <div className="container mt-5">
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl ={element.url} />
              </div>

            })}
          </div>
        </div>
      </div>
    )
  }
}

export default News
