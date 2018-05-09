import React from 'react';
import ReactDOM from 'react-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
//
// Files
import './assets/App.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));