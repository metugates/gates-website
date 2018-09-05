import React, { Component } from 'react';
import Navbar from '../navbar';
import SubNavbar from '../subnavbar';
import Introduction from '../intro';
import Contact from '../contact';
import Carousel from '../carousel';

class Homepage extends Component {
    render()
    {
        return (
            <div>
                <Navbar sub=""/>
                <SubNavbar />
                <Carousel/>
                <Introduction/>
                <Contact/>
            </div>
        )
    }
}

export default Homepage;
