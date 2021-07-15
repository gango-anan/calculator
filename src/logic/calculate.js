import Operate from "./operate";

const Calculate = (() => {
  const handleCalculations = (data, btnName) => {
    let { total, next, operation } = data;
    const operators = ['+', 'X', '/', '-'];
    if(operators.includes(btnName)){
      if (!total) {
        total = 0;
      }
      if (total && !next) {
        operation = btnName;
      }
      if (total && next && operation) {
        total = Operate.operate(total, next, operation)
      }
      operation = btnName;
    }

    return data
  }

  const handleNumberPad = (data, btnName) => {
    let { total, next, operation } = data;
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(btnName)) {
      if (!operation && !total) {
        total = btnName;
      } else {
        total += btnName;
      }
      if (!next) {
        next = btnName;
      } else {
        next += btnName;
      }
    }

    return data;
  }

  const handleOtherOperations = (data, btnName) => {
    let { total, next, operation } = data;
    if (btnName === '+/-') {
      total *= -1;
      next *= -1;
    }
    if (btnName === '%') {
      if (!total) {
        total = Operate.operate(total, operation);
      }
      else {
        next = Operate.operate(next, operation);
      }
    }
    if (btnName === '+/-') {
      total *= -1;
      next *= -1;
    }
    if (btnName === 'AC') {
      total = null;
      next = null;
      operation = null;
    }
    if (btnName === '=') {
      if (!total && !next) {
        return 0;
      }
      if (total && !next) {
        return 0;
      }
      if (total && next) {
        Operate.operate(total, next, operation);
        next = null;
        operation = btnName;
      }
    }
    if (btnName === '.') {
      if (!total) {
        return '0.';
      }
      if (total && operation) {
        total += '.';
      }
      if (total && operation && next) {
        next += '.';
      }
      if (total && operation && !next) {
        next += '0.';
      }
    }

    return data;
  }

  const calculate = (data, btnName) => {
    handleCalculations(data, btnName);
    handleNumberPad(data, btnName);
    handleOtherOperations(data, btnName);
  }

  return { calculate };
})();

export default Calculate;
