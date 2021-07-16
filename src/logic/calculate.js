import Operate from './operate';

const Calculate = (() => {
  const handleCalculations = (data, btnName) => {
    let { total, next, operation } = data;
    const operators = ['+', 'X', '/', '-', '%'];
    if (operators.includes(btnName)) {
      if (!total) {
        total = 0;
        operation = btnName;
      }
      if (total && !next) {
        operation = btnName;
      }
      if (total && next && operation) {
        total = Operate.operate(total, next, operation);
        operation = btnName;
        if (operation === '%') {
          operation = null;
        }
        next = null;
      }
    }

    return data;
  };

  const handleNumberPad = (data, btnName) => {
    const { operation } = data;
    let { total, next } = data;
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(btnName)) {
      if (!total) {
        total = btnName;
      }
      if (total && !operation) {
        total += btnName;
      }
      if (total && operation && !next) {
        next += btnName;
      }
      if (total && operation && next) {
        next += btnName;
      }
    }

    return data;
  };

  const handleOtherOperations = (data, btnName) => {
    let { total, next, operation } = data;
    if (btnName === '+/-') {
      if (total && next) {
        total *= -1;
        next *= -1;
      }
      if (total && !next) {
        total *= -1;
      }
    }
    if (btnName === 'AC') {
      total = null;
      next = null;
      operation = null;
    }
    if (btnName === '=') {
      if (total && next && operation) {
        total = Operate.operate(total, next, operation);
      }
      if (!operation) {
        total = null;
      }
      operation = null;
      next = null;
    }
    if (btnName === '.') {
      if (!total) {
        total = '0.';
      }
      if (total && operation) {
        if (next && !next.includes('.')) {
          next = `${next}.`;
        }
        if (!next) {
          next = '0.';
        }
      }
      if (total && operation && next) {
        next += '.';
      }
      if (total && operation && !next) {
        next += '0.';
      }
    }

    return data;
  };

  const calculate = (data, btnName) => {
    handleCalculations(data, btnName);
    handleNumberPad(data, btnName);
    handleOtherOperations(data, btnName);
  };

  return { calculate };
})();

export default Calculate;
