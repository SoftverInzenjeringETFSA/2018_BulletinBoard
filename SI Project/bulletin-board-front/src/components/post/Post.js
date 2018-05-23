import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import Image from '../image/Image';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import moment from 'moment';
//import 'react-datepicker/dist/react-datepicker.css';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			PostId: String,
			UserId: Number,
			Title: String,
			Description: String,
			Color: String,
			DateCreated: Date,
			IsHidden: Boolean,
			Date: Date
		};
		this.fetchPost = this.fetchPost.bind(this);
		this.hidePost = this.hidePost.bind(this);
		this.ping = this.ping.bind(this);
	}

	createPost() {}

	//Future service to get post...
	fetchPost() {
		// Post = {
		// 	UserId: Number,
		// 	Title: String,
		// 	Description: String,
		// 	Color: String,
		// 	DateCreated: Date,
		// 	IsHidden: true,
		// 	Date: Date
		// };

		// *-----------------------------------------Note-------------------------------------------------------------------------------------------*
		// The following code is a temporary placeholder to showcase show hide functionality
		// PostId is a random UUID which I used to test on my local machine
		// Service for getting posts will be set in a parent component
		// This code serves only to show that it is possible to hit backend /hidePost/{id} method and will be removed from here
		// *------------------------------------------------------------------------------------------------------------------------------------*
		const PostTemp = {
			PostId: '100ae528-088c-4977-a405-f6f431bbef3f',
			Title: 'VeryCohlTitle',
			Description: 'String',
			Color: 'String',
			DateCreated: Date.now().toString(),
			IsHidden: true,
			Date: 'Date'
		};
		return PostTemp;
	}

	componentDidMount() {
		var temp = this.fetchPost();
		//this.state.PostId = temp.PostId; ....
	}

	hidePost() {
		if (this.state.IsHidden === true) {
			this.setState({
				IsHidden: false
			});
		} else {
			this.setState({
				IsHidden: true
			});
		}
	}

	//pickDate(){<DatePicker/>} //povezati funkciju na button
	//Ne prolazi instalacija datePickera

	// *-----------------------------------------Note-------------------------------------------------------------------------------------------*
	// The following code is a temporary placeholder to showcase show hide functionality
	// PostId is a random UUID which I used to test on my local machine
	// Service for getting posts will be set in a parent component
	// This code serves only to show that it is possible to hit backend /hidePost/{id} method and will be removed from here
	// *------------------------------------------------------------------------------------------------------------------------------------*

	ping() {
		// console.log("Ping was clicked");
		// alert("Hello! I am an alert box!!");
		const path = '/Post/hidePost/100ae528-088c-4977-a405-f6f431bbef3f';
		axios
			.post(
				'http://localhost:8080/Post/hidePost/100ae528-088c-4977-a405-f6f431bbef3f',
				{}
			)
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});

		// axios.get("http://localhost:8080/Post/getall").then(res => {
		// 		alert("Received Successful response from server!");
		// 		console.log(res.data); // array of post
		// 	}, err => {
		// alert("Server rejected response with: " + err);
		// });
	}

	render() {
		return (
			<div className="section">
				<div>
					<div className="title">
						{this.fetchPost().Title} <br />
					</div>
					<div className="postBody">
						{this.fetchPost().UserId} <br />
						{this.fetchPost().DateCreated}
						<br />
						{this.state.IsHidden.toString()}
					</div>
				</div>
				<div />
				<div />
				<div>
					<button onClick={this.ping}>Ping!</button>
					<button onClick={this.hidePost}>Hide!</button>
					<button>Datum</button>
				</div>
			</div>
		);
	}
}

export default Post;
