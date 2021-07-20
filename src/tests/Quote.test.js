import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

beforeEach(() => {
  render( <Quote /> );
});

afterEach(() => {
  cleanup();
});

test('should render Quote component', () => {
  const quoteContainer = screen.getByTestId('quote-container');
  expect(quoteContainer).toBeInTheDocument();
});

test("should have the text 'chuckle about not being good at math'", () => {
  const quote = screen.getByTestId('quote');
  expect(quote).toHaveTextContent('chuckle about not being good at math');
});

test("should have the text 'Neil deGrasse Tyson'", () => {
  const quoteAuthor = screen.getByTestId('quote-author');
  expect(quoteAuthor).toHaveTextContent('Neil deGrasse Tyson');
});

test('Matches snapshot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});