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

        <div className="App-help">
          <p>  
            <b>UserController</b> - API kontroler povezan sa dashboard i postavke pogledima. Sadrži pozive metoda koji se tiču obrade podataka za korisnika i njegovih ličnih podataka.</p>
          <p>  
            <b>PostController</b> - API kontroler povezan sa dashboard pogledom. Sadrži pozive metoda koji se tiču obrade podataka za postove. Postove je moguće dodavati, uređivati i brisati. 
            Sva logika je implementirana putem ovog kontrolera.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
