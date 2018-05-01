import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


class Login extends Component {
  render() {
    return (
        <div className="App-login">
          <h3>Kako biste mogli koristiti stranicu, morate se prijaviti:</h3>
          <input type="text" placeholder="Email"/><br/>
          <input type="password" placeholder="Password"/><br/>
          <button>Login</button><br/>
            Nemate račun? <Link to="/register">Registrujte se!</Link>
        </div>
    );
  }
}

export default Login;
