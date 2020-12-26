import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Project from './pages/Project';
import SinglePost from './pages/SinglePost';
import Post from './pages/Post';
import About from './pages/About';

class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route component={Home} path='/' exact></Route>
                <Route component={About} path='/about'></Route>
                <Route component={Post} path='/post'></Route>
                <Route component={SinglePost} path='/post/:slug'></Route>
                <Route component={Project} path='/project'></Route>
            </Switch>
        );
    }
}

export default AppRoute;