import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends Component {
  render() {
    return (
        <div className="App-register">
            <h3>Da biste započeli sa korištenjem, napravite novi račun:</h3>
            <input type="text" placeholder="Username"/><br/>
            <input type="text" placeholder="Ime"/><br/>
            <input type="text" placeholder="Prezime"/><br/>
            <input type="text" placeholder="Email"/><br/>
            <input type="password" placeholder="Password"/><br/>
            <input type="password" placeholder="Potvrda passworda"/><br/>
            <button>Login</button><br/>
            Već ste registrovani? <Link to="/login">Prijavite se!</Link>
        </div>
    );
  }
}

export default Register;
