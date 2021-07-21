import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
});

afterEach(() => {
  cleanup();
});

test('should render Navbar component', () => {
  const navBarElement = screen.getByTestId('navbar-test');
  expect(navBarElement).toBeInTheDocument();
});

test("should have the text 'Home'", () => {
  const linkOne = screen.getByTestId('navbar-link1');
  expect(linkOne).toHaveTextContent('Home');
});

test("should have the text 'Calculator'", () => {
  const linkTwo = screen.getByTestId('navbar-link2');
  expect(linkTwo).toHaveTextContent('Calculator');
});

test("should have the text 'Quote'", () => {
  const linkThree = screen.getByTestId('navbar-link3');
  expect(linkThree).toHaveTextContent('Quote');
});

test('Matches snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
