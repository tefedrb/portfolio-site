import React from 'react';
import { hot } from 'react-hot-loader';
import Home from './Home';
import { Provider } from '../context';
import Monitor from './Monitor/Monitor';
import TestComponent from '../components/TestComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
    <Router>
        <Provider>
            <Monitor>
                <Home />
            </Monitor> 
        </Provider>
    </Router>
);

export default hot(module)(App);