import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './component/home/home';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducer';

let store = createStore(todoApp);


ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root')
);
