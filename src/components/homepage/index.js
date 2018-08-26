import React, { Component } from 'react';
import Navbar from '../navbar';
import Introduction from '../intro';
import Contact from '../contact';

class Homepage extends Component {
    render()
    {
        return (
            <div>
                <Navbar sub=""/>
                <Introduction/>
                <Contact/>
            </div>
        )
    }
}

export default Homepage;
