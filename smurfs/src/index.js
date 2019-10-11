import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(thunk),   
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)


ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById("root")
);
