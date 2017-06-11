import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      persons: []
    }
  }

  
  componentDidMount() {
    fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(data => {
        this.setState({persons: data})
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React - Docker</h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
