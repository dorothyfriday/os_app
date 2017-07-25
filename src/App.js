import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OpenSpaceChart from './OpenSpaceChart'


class App extends Component {
  render() {
    return (
        <OpenSpaceChart
            height={250}
            width={500}/>
  );
  }
}

export default App;
