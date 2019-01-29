import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/fonts/font-awesome.min.css';
import './assets/fonts/materialdesignicons.min.css';
import './assets/styles/main.scss';
import './components/Forms/LoginForm/LoginForm.scss';
import './views/Login/Login.scss';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
