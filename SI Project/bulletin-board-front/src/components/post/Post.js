import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import axios from 'axios'

class Post extends Component {
	
	
	constructor(props) {
        super(props);
        this.state = {
				UserId: Number,
				Title: String,
				Description: String,
				Color: String,
				DateCreated: Date,
				IsHidden: true,
				Date: Date
		};
		this.fetchPost = this.fetchPost.bind(this);
		this.hidePost = this.hidePost.bind(this);
	}

	ping() {
		// console.log("Ping was clicked");
		// alert("Hello! I am an alert box!!");
		
		axios.get("http://localhost:8080/getAllPostsWithDate").then(res => {
				alert("Received Successful response from server!"+res);
			}, err => {
		alert("Server rejected response with: " + err);
  });
	}

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
			const PostTemp = {
				UserId: 1,
				 Title: "VeryCohlTitle",
				 Description: "String",
				 Color: "String",
				 DateCreated: Date.now().toString(),
				 IsHidden: "Boolean",
				 Date: "Date"
			};
			return PostTemp;
	}


	
	hidePost(){
		var temp = this.fetchPost();//.then(response => {
			if(this.state.IsHidden == true)
			{
				this.setState({
					IsHidden : false
				});
			}
			else
			{
				this.setState({
					IsHidden : true
				});
			}
			
			// this.setState((prevState, props) => ({
			// 	IsHidden : prevState.IsHidden
			//   }));
		//});
	}

	
		// if(this.state.IsHidden == false)
		// {
		// 	this.setState({
		// 		IsHidden: true
		// 	  });
		// }
	
	  
	render() {
		
		
	return (
			<div className="section" >
			<div>
				{this.fetchPost().UserId} <br/>
				{this.fetchPost().Title}  <br/>
				{this.fetchPost().DateCreated}<br/>
				{this.state.IsHidden.toString()}
			</div>
			<div></div>
			<div></div>
				<div>
					<button onClick={this.ping}>Ping!</button>
					<button onClick={this.hidePost}>Hide!</button>
				</div>
			</div>
		);
	}
}

export default Post;
