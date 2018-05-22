let Validator = (function() {
	return {
		validateUsername: username => username.length >= 3 && username.length < 15,
		validatePassword: password =>
			Boolean(
				password.match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9].{7,})$/g)
			),
		validateFirstname: firstname =>
			firstname.length >= 5 && firstname.length < 15,
		validateLastname: lastname => lastname.length >= 5 && lastname.length < 15,
		validateEmail: email => Boolean(email.match(/\S+@\S+\.\S+/)),
		validateConfpassword: (confpassword, pass) => confpassword === pass
	};
})();
let Handler = {
	username: Validator.validateUsername,
	password: Validator.validatePassword,
	firstname: Validator.validateFirstname,
	lastname: Validator.validateLastname,
	email: Validator.validateEmail,
	confpassword: Validator.validateConfpassword
};
let ErrorMessages = {
	username:
		'Invalid username! Username should contain beetween 5 and 15 characters.',
	password:
		'Invalid password! Should contain min 7 characters and min one digit.',
	firstname:
		'Invalid firstname! Firstname should contain beetween 3 and 15 characters.',
	lastname:
		'Invalid lastname! Lastname should contain beetween 5 and 15 characters.',
	email: 'Invalid email! Email should contain beetween 5 and 25 characters.',
	confpassword: 'Password does not match the confirm password.'
};

export { Validator, Handler, ErrorMessages };
