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

  const calculate = (data, btnName) => {
    handleCalculations(data, btnName);
  }

  return { calculate };
})();

export default Calculate;
