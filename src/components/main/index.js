import React, { Component } from 'react';
import Homepage from '../homepage';
import ShowcasePage from '../showcasepage';

import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/urunler" component={ShowcasePage} />
            </Switch>

        )
    }
}

export default Main;
