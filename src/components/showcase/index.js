import React, { Component } from 'react';
import './showcase.css';
import Jumbo from '../jumbo';


class Showcase extends Component {
  state = {
    games: [],
  }

  componentDidMount() {
    fetch("https://gates-api.herokuapp.com/",{mode:'cors', method: 'get'})
      .then(response => response.json())
      .then(json => {
        this.setState({games:json.games})
      });
  }

  render() {

    const { games } = this.state;

    return (
      <div className="main">
        {games.map(function(object, i){ return (<Jumbo productInfo={object} key={i} />)})}
      </div>
    )
  }
}

export default Showcase;