import React, { Component } from 'react';
import './carousel.css';



export default class Carousel extends Component {

    render(){
        return (
            <div className="carousel">
                <h1 className="carousel-title" >METU GATES</h1>
                <h3 className="carousel-subtext">ODTÜ'nün en interaktif topluluğu!</h3>
                <a href="https://facebook.com/metugates" target="_blank" rel="noopener noreferrer" className="carousel-button">Bize katıl!</a>
            </div>
        );
    }
}
