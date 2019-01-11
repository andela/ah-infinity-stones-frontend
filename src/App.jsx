import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Articles from './components/Article';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './views/Navbar'
import Home from './views/Home'
import Login from './views/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/articles' component={Articles}/>
        </div>
      </BrowserRouter>
      </Provider>
      
      
    );
  }
}

export default App;
