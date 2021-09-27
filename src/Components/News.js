import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             articles:[],
             loading:false,
             page:1,
             
        }
    }
   async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=52ad7fccaf064394aad70c7d8a829f07&page=1&pageSize=20";
        let data=await fetch(url);
        let parsedData=await data.json();
   
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }
    handlePrevClick= async()=>{
        console.log("Previous");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=52ad7fccaf064394aad70c7d8a829f07&page=${this.state.page - 1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
   
       
        this.setState({
            page:this.state.page -1,
            articles:parsedData.articles
        }) 
   
    }
    handleNextClick= async()=>{
    //  console.log("Next"); 
    if(this.state.page +1>Math.ceil(this.state.totalResults/20)){

    }
    else{  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=52ad7fccaf064394aad70c7d8a829f07&page=${this.state.page +1}&pageSize=20`;
     let data=await fetch(url);
     let parsedData=await data.json();

    
     this.setState({
         page:this.state.page +1,
         articles:parsedData.articles
     })}
    

    }
    render() {
        return (
            <div className="container my-4">
                <div className="text-center "> <h1>News-Monkey Todays-HeadLines</h1></div>
               

              <div className="row">
                {this.state.articles.map((element)=>{  return  <div className="col-md-4" key={element.url}>
                       <NewsItem title={element.title} description={element.description?element.description.slice(0,60):""} imageurl={element.urlToImage} newsurl={element.url}/>
                  </div>})}
                  <div className="container d-flex justify-content-between">
                  <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>	&#8592; Previous </button>
                  <button  disabled={this.state.page +1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &#8594;</button>
                  </div>
               
             
                  </div>
                  </div>
                  
        )
    }
}

export default News
