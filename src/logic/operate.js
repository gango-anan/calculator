import Big from 'big.js';

const Operate = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    const numOne = new Big(numberOne);
    const numTwo = new Big(numberTwo);
    let result = '';
    if (operation === '+') {
      result = numOne.plus(numTwo).toString;
    }
    if (operation === 'X') {
      result = numOne.times(numTwo).toString;
    }
    if (operation === '-') {
      result = numOne.minus(numTwo).toString;
    }
    if (operation === '÷') {
      result = numOne.div(numTwo).toString;
    }
    if (operation === '%') {
      result = numOne.mod(numTwo).toString;
    }
    if (!(['%', '÷', 'X', '+'].includes(operation))) {
      result = 'Error';
    }

    return result;
  };

  return { operate };
})();

export default Operate;
