import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Batsman } from './features/bats/Basman';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Batsman />
      </header>
    </div>
  );
}

export default App;
