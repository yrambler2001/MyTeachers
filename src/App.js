import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeacherForm from './views/TeacherForm'
import TeacherTable from './views/TeacherTable';
var _ = require('lodash');

class App extends Component {
  static a = [];//database
  //TODO: Add database
  render() {
    this.tt=<TeacherTable table={App.a} />
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{_.ceil(3.3) === 4 ? "Lodash loaded" : "no Lodash"}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TeacherForm update={this.tt}/>
          {this.tt}
        </header>
      </div>
    );
  }
}

export default App;
