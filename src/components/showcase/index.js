import React, { Component } from 'react';
import './showcase.css';
import Jumbo from '../jumbo';


class Showcase extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    fetch("https://gates-api.herokuapp.com/products",{mode:'cors', method: 'get'})
      .then(response => response.json())
      .then(json => {
        this.setState({products:json.products})
      });
  }

  render() {

    const { products } = this.state;

    return (
      <div className="main">
        {products.map(function(object, i){ return (<Jumbo productInfo={object} key={i} />)})}
      </div>
    )
  }
}

export default Showcase;
