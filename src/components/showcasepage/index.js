import React, { Component } from 'react';
import Navbar from '../navbar';
import Showcase from '../showcase';

class ShowcasePage extends Component {
  
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

export default ShowcasePage;
