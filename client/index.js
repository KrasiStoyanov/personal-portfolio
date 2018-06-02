import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';

import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
    	<BrowserRouter>
    		<App />
	    </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);