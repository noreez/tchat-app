import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My chat
        </p>
        <div>
          <Chat/>
        </div>
    
      </header>
    </div>
  );
}

export default App;
