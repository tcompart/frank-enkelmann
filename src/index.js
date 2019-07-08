import React from "react";
import ReactDOM from 'react-dom';
import './stylesheets/main.css'
import App  from './scripts/App';
import 'react-app-polyfill/ie11';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);