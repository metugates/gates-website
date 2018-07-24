import React, { Component } from 'react';
import Navbar from '../navbar';
import Showcase from '../showcase';

class Homepage extends Component {
    render()
    {
        return (
            <div>
                <Navbar sub=""/>
                <Showcase/>
            </div>
        )
    }
}

export default Homepage;
