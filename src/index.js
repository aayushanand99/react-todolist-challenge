import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import combineReducers from './reducers'

const store = createStore(combineReducers, applyMiddleware(thunk, promise))

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
