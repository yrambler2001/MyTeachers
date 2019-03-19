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
          <p>{_.ceil(3.3) === 4 ? "Lodash loaded" : "no Lodash"}</p>
          <details>
          <summary>Old form (spoiler)</summary>
          <TeacherForm />
          <br/></details>
          
          <TeacherTable />
          <br/>
        </header>
      </div>
    );
  }
}

export default App;
