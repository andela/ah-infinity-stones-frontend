import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload...
            <i className="mdi mdi-cursor-text mdi-24px"></i>
          </p>

          <h4>
            Powered by Sass <span className="spinner">
            <i className="fa fa-cog fa-spin fa-1x"></i></span>
          </h4>

          <span className="success">

            <a
              className="app-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

          </span>
        </header>
      </div>
    );
  }
}

export default App;
