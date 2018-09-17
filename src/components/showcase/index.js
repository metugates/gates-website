import React, { Component } from 'react';
import './showcase.css';
import Jumbo from '../jumbo';


class Showcase extends Component {
  constructor(props){
      super(props);
      let products = [];
      if(localStorage.getItem('products')!=='undefined' && localStorage.getItem('products')!==null){
          products = JSON.parse(localStorage.getItem('products'));
      }
      this.state={products}
  }
  componentDidMount() {
    fetch("http://localhost:3002/products",{mode:'cors', method: 'get'})
      .then(response => response.json())
      .then(json => {
        console.log(json);
        localStorage.setItem('products',JSON.stringify(json.products));
        this.setState({products:json});
      });
  }

  render() {
    let {products} = this.state;
    return (
      <div className="main">
        <h1>Ürünlerimiz</h1>
        {products.map(function(object, i){ return (<Jumbo productInfo={object} key={i} />)})}
      </div>
    )
  }
}

export default Showcase;
