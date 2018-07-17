import React, { Component } from 'react';
import './App.css';
import Navbar from '../navbar';
import Main from '../main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
