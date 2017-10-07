import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {
  componentDidMount() {
    axios.get('/greeting?name=Sean')
      .then(({ data }) => console.log(data))
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
