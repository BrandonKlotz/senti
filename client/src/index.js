import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import reducer from './reducers';
import { fetchResults } from "./actions";

const store = createStore(
    reducer,
    applyMiddleware( 
    thunkMiddleware, 
    createLogger() ) // Enable Redux logging which is handy for developers.
);

store.dispatch(fetchResults());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
