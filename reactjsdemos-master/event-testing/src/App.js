import React, { useState } from 'react';

// import Form from './Form';
import FormWithPropsFn from './FormWithPropsFn';

function App() {
  return (
    <FormWithPropsFn submit={({ name }) => { console.log(name) }} />
  );
}

export default App;
