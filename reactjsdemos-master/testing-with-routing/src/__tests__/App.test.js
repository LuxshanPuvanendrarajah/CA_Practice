import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import App from '../App';

jest.mock('../Components/About', () => {
  return function About() { return <h1>My Mock About Component</h1> }
});

jest.mock('../Components/Header', () => {
  return function Header() { return <h1>My Mock Header Component</h1> }
});

jest.mock('../Components/Home', () => {
  return function Home() { return <h1>My Mock Home Component</h1> }
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Snapshot renders', () => {
  const appSnapshot = create(<App />).toJSON();

  expect(appSnapshot).toMatchSnapshot();
});
