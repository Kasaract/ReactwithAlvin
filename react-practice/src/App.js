import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyComponent';

// Functional component (as opposed Class component)
function App() {

  // React hook
  const [value, setValue] = useState(0);

  //value = state

  return (
    <div className="App">
      <button onClick={() => setValue(value + 1)}>Click me!</button>
      <div>{value}</div>
    </div>
  );
}

export default App;
