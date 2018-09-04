import React, { Component } from 'react';
import Navbar from '../navbar';
import Introduction from '../intro';
import Contact from '../contact';
import Carousel from '../carousel';

class Homepage extends Component {
    render()
    {
        return (
            <div>
                <Navbar sub=""/>
                <Carousel/>
                <Introduction/>
                <Contact/>
            </div>
        )
    }
}

export default Homepage;
