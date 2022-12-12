import React from 'react';
import MyComponent from './MyComponent';
import './App.css';
import DataProvider from './StateManagement/DataProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <MyComponent />
      </DataProvider>
    </div>
  );
}

export default App;
