import React, { useEffect, useState } from 'react';
import DisplayPanel from './DisplayPanel';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
import '../styles/Calculator.css';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnName) => {
    const calculations = Calculate.calculate(data, btnName);
    setData({
      total: calculations.total,
      next: calculations.next,
      operation: calculations.operation,
    });
  };

  const valueToDisplay = (outPut) => {
    const { next, operation, total } = outPut;
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
  };

  useEffect(() => {
    if (data.operation) {
      document.title = `You just did a ${data.operation} operation`;
    }
  });

  return (
    <div className="calculator-wrapper">
      <DisplayPanel result={valueToDisplay(data)} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
