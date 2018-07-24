import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../../scenes/Home';
import Project from '../../scenes/Project';

import DocumentDefault from '../DocumentDefault';

const App = () => (
    <BrowserRouter>
        <DocumentDefault>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects/:slug" component={Project} />
            </Switch>
        </DocumentDefault>
    </BrowserRouter>
);

export default App;
