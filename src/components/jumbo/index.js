import React, { Component } from 'react';
import './jumbo.css'



class Jumbo extends Component {



  render () {

    var gameInfo = this.props.productInfo;

    return (
      <div className="jumbo">
        <div className="imageDiv">
          <div className="centered">
            <img className="productImage" src={gameInfo.image} alt="" />
          </div>
        </div>
          <div className="productInfo">
            <h2 className="productName">{gameInfo.name}</h2>
            <h3 className="productAuthor">{gameInfo.author}</h3>
            <p className="productDescription">{gameInfo.description}</p>
          </div>
          <div className="links">
            <a href={gameInfo.link}>
              <img className="linkImg" src="https://i.amz.mshcdn.com/K1p5PL4669x6LLyGzxlqe25Xtsc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F475500%2Ff018ae30-f60a-43b7-a3fd-d9acec74849e.png" alt="playstore"/>
            </a>
            <a href={gameInfo.link}>
              <img className="linkImg" src="http://icons.iconarchive.com/icons/tristan-edwards/sevenesque/1024/App-Store-icon.png" alt="appstore"/>
            </a>
        </div>
      </div>
    )
  }
}

export default Jumbo;
