import React, { Component } from 'react';
import Homepage from '../homepage';
import QA from '../qa';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/qa" component={QA} />
            </Switch>

        )
    }
}

export default Main;
