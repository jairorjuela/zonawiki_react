import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Server from './Server.js'
import Routerr from './Routerr.js'

import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Form />
      <Server />
      <Button variant="primary">Primary</Button>
      <Routerr />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
