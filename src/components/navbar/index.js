import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title"><Link to="/">METU GATES</Link> { (this.props.sub !== "") &&<Link to="/qa"><span className="sub">{this.props.sub}</span></Link> }</h1>
      <div className="rightMenu">
      {this.props.sub === "soru-cevap"
      &&
      (
          <Link to="/qa/new"><h3>Ask a Question</h3></Link>
      )
      }
      
      {this.props.sub === ""
      &&
      (
          <Link to="/qa"><h3>Forum</h3></Link>
      )
      }
      </div>

      </header>
    )
  }
}

export default Navbar;
