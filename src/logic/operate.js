import Big from 'big.js';

const Operate = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    const numOne = new Big(numberOne);
    const numTwo = new Big(numberTwo);
    if (operation === '+') {
      return numOne.plus(numTwo).c.join('');
    }
    if (operation === 'X') {
      return numOne.times(numTwo).c.join('');
    }
    if (operation === '-') {
      return numOne.minus(numTwo).c.join('');
    }
    if (operation === '÷') {
      return numOne.div(numTwo).c.join('');
    }
    if (operation === '%') {
      return numOne.mod(numTwo).c.join('');
    }

    return 'Wrong Operator!';
  };

  return { operate };
})();

export default Operate;
