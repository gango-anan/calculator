import Big from 'big.js';

const Operate = (() => {
  const operate = (numberOne, numberTwo = null, operation) => {
    const numOne = new Big(numberOne);
    const numTwo = new Big(numberTwo);
    let result = 0;

    if (operation === '+') {
      result = numOne.plus(numTwo);
      return result.c[0];
    }
    if (operation === 'X') {
      result = numOne.times(numTwo);
      return result.c[0];
    }
    if (operation === '-') {
      result = numOne.minus(numTwo);
      return result.c[0];
    }
    if (operation === '÷') {
      result = numOne.div(numTwo);
      return result.c[0];
    }
    if (operation === '%') {
      result = numOne.div(Big(100));
      return result.c[0];
    }
    return result;
  };

  return { operate };
})();

export default Operate;
