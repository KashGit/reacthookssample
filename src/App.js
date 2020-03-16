import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClass from './CounterClass'
import CounterHook from './CounterHook'

function App() {
  return (
    <div className="App">
      <CounterClass />
      <hr />
      <CounterHook />
    </div>
  );
}

export default App;
