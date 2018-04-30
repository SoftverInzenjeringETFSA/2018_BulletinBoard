import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HELP</h1>
          <p>Stranica namjenjena boljem shvatanju arhitekture aplikacije za sve developere koji u budućnosti mogu raditi na razvoju i održavanju.</p>
        </header>

        <p className="App-intro">
          --
        </p>
      </div>
    );
  }
}

export default App;
