import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';
import Errors from '../../helpers/Errors';
import { Validator, Handler, ErrorMessages } from '../../helpers/Validator';
import axios from 'axios';

class Login extends Component {
	state = {
		username: '',
		password: '',
		errors: new Errors(),
		toDashboard: true,
		toAdminboard: false
	};

	handleClick(e) {
		axios
			.post('/login', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				if (response.data)
					response.data.role === 'admin'
						? this.setState({ toAdminboard: true })
						: this.setState({ toDashboard: true });
				else {
					alert('Bad credentials!');
				}
			})
			.catch(error => console.log(error));
	}
	handleInput(e) {
		if (!Handler[e.target.name](e.target.value)) {
			this.state.errors.record({
				[e.target.name]: ErrorMessages[e.target.name]
			});
			this.setState({
				errors: this.state.errors,
				[e.target.name]: e.target.value
			});
		} else {
			this.state.errors.clear(e.target.name);
			this.setState({
				errors: this.state.errors,
				[e.target.name]: e.target.value
			});
		}
	}

	areInputsNotEmpty() {
		return Array.from(Object.keys(this.state)).every(
			key =>
				!(typeof this.state[key] === 'string' && this.state[key].length === 0)
		);
	}

	render() {
		if (this.state.toDashboard === true) {
			return <Redirect to="/dashboard" />;
		}
		if (this.state.toAdminboard === true) {
			return <Redirect to="/adminboard" />;
		}
		return (
			<div className="App-login">
				<h3>Kako biste mogli koristiti stranicu, morate se prijaviti:</h3>
				<input
					type="text"
					name="username"
					value={this.state.username}
					placeholder="Username"
					onChange={e => this.handleInput(e)}
				/>
				<br />
				<span
					hidden={!this.state.errors.has('username')}
					className="help error"
				>
					{this.state.errors.get('username')}
				</span>
				<br />
				<input
					type="password"
					name="password"
					value={this.state.password}
					placeholder="Password"
					onChange={e => this.handleInput(e)}
				/>
				<br />
				<span
					hidden={!this.state.errors.has('password')}
					className="help error"
				>
					{this.state.errors.get('password')}
				</span>
				<br />
				<button
					disabled={this.state.errors.any() || !this.areInputsNotEmpty()}
					onClick={e => this.handleClick(e)}
				>
					Login
				</button>
				<br />
				Nemate račun? <Link to="/register">Registrujte se!</Link>
			</div>
		);
	}
}

export default Login;
