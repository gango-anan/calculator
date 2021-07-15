import React, { Component } from 'react';
import Button from './Button';

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
            { id: '6', name: '6' },
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

  render() {
    const { buttons } = this.state;
    return (
      <div>
        <div>
          { buttons[0].rowOne.map((button) => <Button key={button.id} name={button.name} />) }
        </div>
        <div>
          { buttons[1].rowTwo.map((button) => <Button key={button.id} name={button.name} />) }
        </div>
        <div>
          { buttons[2].rowThree.map((button) => <Button key={button.id} name={button.name} />) }
        </div>
        <div>
          { buttons[3].rowFour.map((button) => <Button key={button.id} name={button.name} />) }
        </div>
        <div>
          { buttons[4].rowFive.map((button) => <Button key={button.id} name={button.name} />) }
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
