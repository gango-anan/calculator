import Big from 'big.js';

const Operate = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    const numOne = new Big(numberOne);
    const numTwo = new Big(numberTwo);
    if (operation === '+') {
      return numOne.plus(numTwo).toString();
    }
    if (operation === 'X') {
      return numOne.times(numTwo).toString();
    }
    if (operation === '-') {
      return numTwo.minus(numOne).toString();
    }
    if (operation === '÷') {
      return numTwo.div(numOne).toString();
    }

    return 'Wrong Operator!';
  };

  return { operate };
})();

export default Operate;
