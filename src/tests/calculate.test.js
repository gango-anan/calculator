import Calculate from '../logic/calculate';

describe('calculate method', () => {
  it('Should be of type function', () => {
    expect(typeof Calculate.calculate).toEqual('function');
  });
  it("Should accept a data object and btnName = '-' for the subtraction operation", () => {
    expect(Calculate.calculate({ total: '5', next: '', operation: '' }, '-')).toEqual({ total: '', next: '5', operation: '-' });
  });
  it("Should accept a data object and btnName = '+' for the addition operation", () => {
    expect(Calculate.calculate({ total: '5', next: '', operation: '' }, '+')).toEqual({ total: '', next: '5', operation: '+' });
  });
  it("Should accept a data object and btnName = 'X' for the multiplication operation", () => {
    expect(Calculate.calculate({ total: '5', next: '', operation: '' }, 'X')).toEqual({ total: '', next: '5', operation: 'X' });
  });
  it("Should accept a data object and btnName = '÷' for the division operation", () => {
    expect(Calculate.calculate({ total: '5', next: '', operation: '' }, '÷')).toEqual({ total: '', next: '5', operation: '÷' });
  });
  it("Should accept a data object and btnName = '%' for the percentage operation", () => {
    expect(Calculate.calculate({ total: '5', next: null, operation: null }, '%')).toEqual({ total: '0.05', next: null, operation: null });
  });
  it("Should accept a data object and btnName = '+/-' for the positive-negative toggle operation", () => {
    expect(Calculate.calculate({ total: '-1', next: null, operation: null }, '+/-')).toEqual({ total: '1', next: null, operation: null });
  });
  it("Should accept a data object and btnName = '.' for the decimal-point operation", () => {
    expect(Calculate.calculate({ total: '5', next: null, operation: null }, '.')).toEqual({ total: '5.', next: null, operation: null });
  });
  it("Should accept a data object and btnName = 'AC' to reset the data object", () => {
    expect(Calculate.calculate({ total: '5', next: '10', operation: '+' }, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
});

