import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';


beforeEach(() => {
  render( <Calculator /> );
});

afterEach(() => {
  cleanup();
});

test('Matches snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should have the text 'Calculator'", () => {
  const heading = screen.getByTestId('calculator-heading');
  expect(heading).toHaveTextContent('Calculator');
});

test('Should show the correct result of a subtraction operation', () => {
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('4')).toBeInTheDocument();
});

test('Should show the correct result of an addition operation', () => {
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('9'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('14')).toBeInTheDocument();
});

test('Should show the correct result of a division operation', () => {
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('÷'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('0.5')).toBeInTheDocument();
});
