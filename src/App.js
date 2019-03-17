import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeacherForm from './views/TeacherForm'
import TeacherTable from './views/TeacherTable';

var _ = require('lodash');


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TeacherForm />
          <TeacherTable />
        </header>
      </div>
    );
  }
}

export default App;
