import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/presentation/App';
import * as serviceWorker from './js/serviceWorker';
//here we tell react to render our component App to the root div 
ReactDOM.render( <App /> , document.getElementById('full-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
