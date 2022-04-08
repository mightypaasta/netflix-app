import React from 'react';
import { CounterReducer } from './features/counterSlice';
import './App.css';
import HomeScreen from './HomeScreen';

function App() {
  return (
    <div className="App">
      <HomeScreen/>
    </div>
  );
}

export default App;
