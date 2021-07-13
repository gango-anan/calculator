import React, { Component } from 'react';
import DisplayPanel from './DisplayPanel';
import ButtonPanel from './ButtonPanel';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <DisplayPanel />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
