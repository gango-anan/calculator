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

  const calculate = (data, btnName) => {
    handleCalculations(data, btnName);
    handleNumberPad(data, btnName);
  }

  return { calculate };
})();

export default Calculate;
