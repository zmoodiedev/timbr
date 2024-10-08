import React from 'react';
import ReactDOM from 'react-dom/client';
import {  HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './core/store';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
                <App />
        </Router>
    </Provider>
);