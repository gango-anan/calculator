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

  handleClick = (btnName) => {
    const calculations = Calculate.calculate(this.state, btnName);
    console.log(calculations);
    this.setState({ ...calculations });
  }

  render() {
    const { total, next, operation } = this.state;
    let displayedOutput = '0';
    if (!next && !operation && total) {
      displayedOutput = total;
    }
    if (total && operation) {
      displayedOutput = total;
    }
    if (next && total && operation) {
      displayedOutput = next;
    }
    return (
      <>
        <DisplayPanel result={displayedOutput} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
