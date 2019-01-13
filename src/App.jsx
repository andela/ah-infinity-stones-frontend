import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';
import Signup from './views/Signup';
import Articles from './components/Article';
import Navbar from './views/Navbar';
import Home from './views/Home';
import Login from './views/Login/index';
import ResetPassword from './components/User/ResetPassword';
import ResetLink from './components/User/ResetPassword/ResetLink';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/articles" component={Articles} />
            <Route path="/user/ResetPassword" component={ResetPassword} />
            <Route path="/user/Resetlink" component={ResetLink} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
