import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './containers/App.js';

import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
    	<Router history={browserHistory}>
        	<Route path="/" component={App}>
	        </Route>
	    </Router>
	</Provider>,
	document.getElementById('root')
);