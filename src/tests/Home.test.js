import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../components/Home';

beforeEach(() => {
  render( <Home /> );
});

afterEach(() => {
  cleanup();
});

test('should render Home component', () => {
  const homeContainer = screen.getByTestId('home-container');
  expect(homeContainer).toBeInTheDocument();
});

test("should have the text 'a portable electronic device'", () => {
  const definition = screen.getByTestId('definition');
  expect(definition).toHaveTextContent('a portable electronic device');
});

test("should have the text 'The first solid-state electronic calculator was created'", () => {
  const details = screen.getByTestId('details');
  expect(details).toHaveTextContent('The first solid-state electronic calculator was created');
});

test('Matches snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
