import React, { Component } from 'react';
import './showcase.css';
import Jumbo from '../jumbo';


class Showcase extends Component {

  componentDidMount() {
    fetch("https://gates-api.herokuapp.com/products",{mode:'cors', method: 'get'})
      .then(response => response.json())
      .then(json => {
        localStorage.setItem('products',JSON.stringify(json.products))
      });
  }

  render() {
    if(localStorage.getItem('products')===null){
        localStorage.setItem('products','[]');
    }
    const products = JSON.parse(localStorage.getItem('products'));

    return (
      <div className="main">
        <h1>Ürünlerimiz</h1>
        {products.map(function(object, i){ return (<Jumbo productInfo={object} key={i} />)})}
      </div>
    )
  }
}

export default Showcase;
