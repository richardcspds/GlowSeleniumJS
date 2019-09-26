/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import logo from './logo.svg';
import './App.css'
 const electron = window.require('electron')
 const axios = require('axios');

function App() {
  function activateShell(e) {
    axios.get('http://127.0.0.1:9000')
    .then(res =>{
      console.log(res);
      
    })
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
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

export default App
