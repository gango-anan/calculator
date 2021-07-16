/* eslint-disable no-self-assign */

import React, { Component } from 'react';
import DisplayPanel from './DisplayPanel';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <>
        <DisplayPanel result={Calculate.calculate.total} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
