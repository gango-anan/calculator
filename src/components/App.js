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
    const { next, operation } = this.state;
    let { total } = this.state;
    if (!Number.isNaN(parseInt(btnName, 10))) {
      total = btnName;
    }

    const calculations = Calculate.calculate({ total, next, operation }, btnName);
    this.setState({ ...calculations });
  }

  valueToDisplay = (next, operation, total) => {
    let displayedOutput = '0';
    if (!next && !operation && total) {
      displayedOutput = total;
    }
    if (!total && next && operation) {
      displayedOutput = next;
    }
    if (next && total && operation) {
      displayedOutput = total;
    }
    return displayedOutput;
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <DisplayPanel result={this.valueToDisplay(next, operation, total)} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
