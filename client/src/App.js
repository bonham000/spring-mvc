import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {
  componentDidMount() {
    axios.get('http://localhost:8080/greeting')
      .then(res => console.log(res))
      .catch(err => console.warn(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
      </div>
    );
  }
}
