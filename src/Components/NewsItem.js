import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        let {title,description,imageurl,newsurl}=this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
  <img src={imageurl?imageurl:"https://picsum.photos/200/300"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <a href={newsurl} target="/" className="btn  btn-sn btn-primary">...Read more</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem
