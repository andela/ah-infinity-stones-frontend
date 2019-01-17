import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import store from './redux/store';
import Articles from './components/Article';
import Navbar from './views/Navbar'
import Home from './views/Home'
import Signup from './views/Signup'
import Login from './views/Login'

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path='/articles' component={Articles}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
