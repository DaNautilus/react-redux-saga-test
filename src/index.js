import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import { reducer } from './reducer';
import { watcherSaga } from './sagas';

import App from './App';
import * as serviceWorker from './serviceWorker';

// redux dev-tool enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
