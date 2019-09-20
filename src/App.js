import React from 'react';
import logo from './logo.svg';
import './App.css';
const childProcess = require('child_process')

function App() {
  
  function activateShell(e){
    console.log(childProcess.exec);
    
    // const exec = childProcess.exec
    // exec('npm run smoke')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button title="RUN SMOKE" onClick={activateShell} >Run Smoke</button>
      </header>
    </div>
  );
}

export default App;
