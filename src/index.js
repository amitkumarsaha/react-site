/* eslint-disable import/default */
import '@babel/polyfill';
import React from 'react';
import {render, browserHistory} from 'react-dom';
import configureStore from './store/configure.store.dev';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
// import {Router} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import routes from './components/routes';

import '../styles/styles.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById('app')
);