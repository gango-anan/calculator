import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          rowOne: [
            { id: 'clear', name: 'AC' },
            { id: 'positiveNegative', name: '+/-' },
            { id: 'percentage', name: '%' },
            { id: 'division', name: '÷' },
          ],
        },
        {
          rowTwo: [
            { id: 'seven', name: '7' },
            { id: 'eight', name: '8' },
            { id: 'nine', name: '9' },
            { id: 'multiplication', name: 'X' },
          ],
        },
        {
          rowThree: [
            { id: 'four', name: '4' },
            { id: 'five', name: '5' },
            { id: 'six', name: '6' },
            { id: 'subtraction', name: '-' },
          ],
        },
        {
          rowFour: [
            { id: 'one', name: '1' },
            { id: 'two', name: '2' },
            { id: 'three', name: '3' },
            { id: 'addition', name: '+' },
          ],
        },
        {
          rowFive: [
            { id: 'zero', name: '0' },
            { id: 'dot', name: '.' },
            { id: 'equals', name: '=' },
          ],
        },
      ],
    };
  }

  handleClick = (btnName) => {
    const { clickHandler } = this.props;
    clickHandler(btnName);
  }

  render() {
    const { buttons } = this.state;
    return (
      <div className="button-panel">
        <div className="row">
          { buttons[0].rowOne.map((btn) => (
            <Button clickHandler={this.handleClick} key={btn.id} name={btn.name} csName={btn.id} />
          )) }
        </div>
        <div className="row">
          { buttons[1].rowTwo.map((btn) => (
            <Button clickHandler={this.handleClick} key={btn.id} name={btn.name} csName={btn.id} />
          )) }
        </div>
        <div className="row">
          { buttons[2].rowThree.map((btn) => (
            <Button clickHandler={this.handleClick} key={btn.id} name={btn.name} csName={btn.id} />
          )) }
        </div>
        <div className="row">
          { buttons[3].rowFour.map((btn) => (
            <Button clickHandler={this.handleClick} key={btn.id} name={btn.name} csName={btn.id} />
          )) }
        </div>
        <div className="row">
          { buttons[4].rowFive.map((btn) => (
            <Button clickHandler={this.handleClick} key={btn.id} name={btn.name} csName={btn.id} />
          )) }
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
