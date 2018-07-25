import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import DocumentDefault from '../DocumentDefault';
import Loader from '../Loader';

const Home = Loadable({
    loader: () => import('../../scenes/Home'),
    loading: Loader,
});

const Project = Loadable({
    loader: () => import('../../scenes/Project'),
    loading: Loader,
});

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
