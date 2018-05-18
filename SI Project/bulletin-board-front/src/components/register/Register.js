import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';
import Errors from '../../helpers/Errors';
import { Validator, Handler, ErrorMessages } from '../../helpers/Validator';
import axios from 'axios';

class Register extends Component {

  state = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        confpassword: "",
        errors: new Errors(),
        toDashboard: false
  };  

  handleClick(e) {
     axios.post('/registration', {
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        email: this.state.email,
      })
      .then(response => this.setState({toDashboard: true}))
      .catch( error => console.log(error));
  }
  handleInput(e){
      if (!Handler[e.target.name](e.target.value,this.state.password)){
        this.state.errors.record({ [e.target.name]: ErrorMessages[e.target.name]});
        this.setState({
          errors: this.state.errors,
          [e.target.name]: e.target.value
        });
      }else{
        this.state.errors.clear(e.target.name);
        this.setState({
          errors: this.state.errors,
          [e.target.name]: e.target.value
        });
      }
  }
  areInputsNotEmpty(){
      return Array.from(Object.keys(this.state)).every(key => !(typeof this.state[key] === "string" && this.state[key].length === 0));
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }
    return (
        <div className="App-register">
            <h3>Da biste započeli sa korištenjem, napravite novi račun:</h3>
            <input type="text" name="username" value= {this.state.username} placeholder="Username" onChange = { e => this.handleInput(e)}/><br/>
            <span hidden={!this.state.errors.has('username')} className="help error">{this.state.errors.get('username')}</span><br/>
            <input type="text" name="firstname" value= {this.state.firstname} placeholder="Ime" onChange = { e => this.handleInput(e)}/><br/>
            <span hidden={!this.state.errors.has('firstname')} className="help error">{this.state.errors.get('firstname')}</span><br/>
            <input type="text" name="lastname" value= {this.state.lastname} placeholder="Prezime" onChange = { e => this.handleInput(e)}/><br/>
            <span hidden={!this.state.errors.has('lastname')} className="help error">{this.state.errors.get('lastname')}</span><br/>
            <input type="text" name="email" value= {this.state.email} placeholder="Email" onChange = { e => this.handleInput(e)}/><br/>
            <span hidden={!this.state.errors.has('email')} className="help error">{this.state.errors.get('email')}</span><br/>
            <input type="password" name="password" value= {this.state.password} placeholder="Password" onChange = { e => this.handleInput(e)}/><br/>
            <span hidden={!this.state.errors.has('password')} className="help error">{this.state.errors.get('password')}</span><br/>
            <input type="password" name="confpassword" value= {this.state.confpassword} placeholder="Potvrda password" onChange = { e => this.handleInput(e)}/><br/>
            <span hidden={!this.state.errors.has('confpassword')} className="help error">{this.state.errors.get('confpassword')}</span><br/>
            <button disabled={this.state.errors.any() || !this.areInputsNotEmpty()} onClick={(e) => this.handleClick(e)} >Register</button><br/>
            Već ste registrovani? <Link to="/login">Prijavite se!</Link>
        </div>
    );
  }
}

export default Register;
