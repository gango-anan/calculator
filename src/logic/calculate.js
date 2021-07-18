import Operate from './operate';

const Calculate = (() => {
  const calculate = (data, btnName) => {
    let { total, next, operation } = data;

    if (!Number.isNaN(Number(btnName))) {
      switch (total) {
        case null:
          total = btnName;
          break;
        default:
          total += btnName;
          break;
      }
    }

    if (['-', '÷', 'X', '+'].includes(btnName)) {
      next = total;
      total = '';
      operation = btnName;
    }
    if (btnName === '%') {
      total = String(total / 100);
    }

    if (btnName === '=') {
      switch (operation) {
        case '+':
          total = Operate.operate(total, next, '+');
          break;
        case '-':
          total = Operate.operate(total, next, '-');
          break;
        case '÷':
          total = Operate.operate(total, next, '÷');
          break;
        case 'X':
          total = Operate.operate(total, next, 'X');
          break;
        default:
      }
    }

    if (btnName === '.') {
      total = total || '0';
      if (total.indexOf('.') === -1) {
        total += btnName;
      }
    }

    if (btnName === 'AC') {
      total = null;
      next = null;
      operation = null;
    }

    if (btnName === '+/-') {
      total = String(Number(total) * -1);
    }

    return { total, next, operation };
  };

  return { calculate };
})();

export default Calculate;
