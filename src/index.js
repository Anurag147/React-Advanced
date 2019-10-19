import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/containers/App';
import registerServiceWorker from './registerServiceWorker';
import AppAssignment from './Assignment1/App-Assignment';
import App2 from './Assignment2/App2';

ReactDOM.render(<App title="Person Manager"/>, document.getElementById('root')); //This line is used to associate react component to DOM
registerServiceWorker();
