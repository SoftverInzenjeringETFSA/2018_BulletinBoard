
let Validator=(function(){
	
	return{
		validateUsername: username => username.length >= 5 && username.length < 15,
		validatePassword: password => password.length >= 5 && password.length < 15,
		validateFirstname: firstname => firstname.length >= 5 && firstname.length < 15,
		validateLastname: lastname => lastname.length >= 5 && lastname.length < 15,
		validateEmail: email => email.length >= 5 && email.length < 25,
		validateConfpassword: confpassword => confpassword.length >= 5 && confpassword.length < 15

	}
}());
let Handler = {
	username: Validator.validateUsername,
	password: Validator.validatePassword,
	firstname: Validator.validateFirstname,
    lastname: Validator.validateLastname,
    email: Validator.validateEmail,
    confpassword: Validator.validateConfpassword
}
let ErrorMessages = {
	username: "Invalid username! Username should contain beetween 5 and 15 characters.",
	password: "Invalid password! Password should contain beetween 5 and 15 characters.",
	firstname: "Invalid firstname! Firstname should contain beetween 5 and 15 characters.",
    lastname: "Invalid lastname! Lastname should contain beetween 5 and 15 characters.",
    email: "Invalid email! Email should contain beetween 5 and 25 characters.",
    confpassword: "Invalid password! Password should contain beetween 5 and 15 characters."
}

export {Validator, Handler, ErrorMessages};