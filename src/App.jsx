import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import store from './redux/store';
import Navbar from './views/Navbar';
import Home from './views/Home';
import Login from './views/Login';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            { isLoggedIn !== 'true' ? <Route exact path="/login" component={Login} /> : <Redirect to="/" /> }
          </div>
        </BrowserRouter>
      </Provider>


    );
  }
}
