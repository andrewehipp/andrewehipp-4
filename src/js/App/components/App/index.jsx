import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import DocumentDefault from '../DocumentDefault';
import RouterUpdate from './components/RouterUpdate';
import Loader from '../Loader';

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "scenes/Home" */ '../../scenes/Home'),
    loading: Loader,
});

const Project = Loadable({
    loader: () => import(/* webpackChunkName: "scenes/Project" */ '../../scenes/Project'),
    loading: Loader,
});

const Archive = Loadable({
    loader: () => import(/* webpackChunkName: "scenes/Archive" */ '../../scenes/Archive'),
    loading: Loader,
});

const App = () => (
    <BrowserRouter>
        <DocumentDefault>
            <RouterUpdate />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/archive" component={Archive} />
                <Route exact path="/projects/:slug" component={Project} />
            </Switch>
        </DocumentDefault>
    </BrowserRouter>
);

export default App;
