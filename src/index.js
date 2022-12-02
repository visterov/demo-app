import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {HashRouter, BrowserRouter} from "react-router-dom";
import store from './redux/redux-store';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
);
