import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <h1 className="title"><Link to="/">METU GATES</Link> { (this.props.sub !== "") &&<Link to="/qa"><span className="sub">{this.props.sub}</span></Link> }</h1>
          <div className="rightMenu">
            <Link to="/urunler">Ürettiklerimiz</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar;
