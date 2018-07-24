import React, { Component } from 'react';
import './navbar.css'
class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">METU GATES<span className="sub">{this.props.sub}</span></h1>
      </header>
    )
  }
}

export default Navbar;
