import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentWithProps from './Components/ComponentWithProps';

function App() {
  const props = {
    headerText: `A header`,
    contentText: `Some content`,
    numericProp: 100,
    expressionProp: 2 + 2,
    valueProp: 1000,
    objectProp: {
      key1: `key 1 value`,
      key2: 2,
      key3: [`Key 3`, `array`, `values`]
    },
    arrayProp: [1, 2, 3],
    functionProp: () => `Hello World`,
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Ed
        </a>
        <ComponentWithProps {...props} />
      </header>
    </div>
  );
}

export default App;
