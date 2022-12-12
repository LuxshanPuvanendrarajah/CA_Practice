import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import App from '../App';

jest.mock('../Components/ComponentWithProps', () => {
  return function ComponentWithPropsMock(props) {
    return (
      <p>Mocked ComponentWithProps</p>
    );
  }
});

test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe(`Snapshot test of App`, () => {
  it(`should match the snapshot every time it is rendered`, () => {
    const testInstanceAppSnapshot = create(<App />).toJSON();

    expect(testInstanceAppSnapshot).toMatchSnapshot();
  });
});
