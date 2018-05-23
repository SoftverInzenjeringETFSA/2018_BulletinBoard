import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Dashboard.css';
import Post from '../post/Post';
import Image from '../image/Image';
import SocialMediaPost from '../socialMediaPost/SocialMediaPost';
import axios from 'axios';
import Modal from 'react-modal';

class Dashboard extends Component {
	state = {
		toLogin: false,
		unauthorized: false,
		modalOpen: false,
		title: '',
		content: ''
	};

	handleTitleChange() {
		this.setState({});
	}

	handleContentChange() {}

	modalVisibility(visible) {
		this.setState({ modalOpen: visible });
	}

	handleClick(e) {
		axios
			.post('/logmeout', {})
			.then(response => this.setState({ toLogin: true }))
			.catch(error => console.log(error));
	}
	componentWillMount() {
		axios
			.get('/welcome', {})
			.then(response => console.log(response))
			.catch(error => this.setState({ unauthorized: true }));
	}

	submitPostData() {}

	render() {
		if (this.state.toLogin === true) {
			return <Redirect to="/login" />;
		}
		if (this.state.unauthorized === true) {
			return <Redirect to="/login" />;
		}
		return (
			<body background="pinboard.jpg">
				<div id="glavniKontejner">
					<div id="side">
						<div />
						<div>
							<i id="user-icon" class="fa fa-user" />
							<i id="plus-icon" class="fa fa-plus" />
							<div class="bottom-link">
								<a onClick={e => this.handleClick(e)} id="logout">
									Log out
								</a>
							</div>
						</div>
					</div>

					<div id="kontejner">
						<h1 class="site-title" id="naslov">
							Naslovnica
						</h1>
						<button onClick={e => this.modalVisibility(!this.state.modalOpen)}>
							+
						</button>
						<Modal
							isOpen={this.state.modalOpen}
							onRequestClose={this.closeModal}
							contentLabel="Example Modal"
						>
							<h1 class="modal-title">Create a new post</h1>
							<form onSubmit={this.submitPostData}>
								<label>
									Title:
									<input
										type="text"
										value={this.state.title}
										onChange={title =>
											this.setState({
												title
											})
										}
									/>
								</label>
								<br />
								<label>
									Content:
									<input
										type="text"
										value={this.state.content}
										onChange={title =>
											this.setState({
												content:''
											})
										}
									/>
								</label>
							</form>
						</Modal>
						<SocialMediaPost
							provider="INSTAGRAM"
							url="https://www.instagram.com/p/BioZ-HbFTGm/?hl=hr"
						/>

						<SocialMediaPost
							provider="FACEBOOK"
							url="https://www.facebook.com/20531316728/posts/10154009990506729/"
						/>

						<div id="stiker1">
							<div className="Sticker-body">
								<p> </p>
								<Post />
							</div>
						</div>

						<div id="stiker2">
							<div className="Sticker-body">
								<i class="fa fa-ellipsis-h" />
								<p>
									{' '}
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Velit rerum odit quisquam. Ducimus dolores cupiditate cumque,
									magnam quae ut reprehenderit perferendis commodi.
								</p>
							</div>
						</div>

						<div id="stiker3">
							<div className="Sticker-body">
								<Image source="http://www.bioinfo.ba/ETF_logo.gif" />
							</div>
							<div class="stiker_in">
								<p>
									ETF Logo<i class="fa fa-ellipsis-h" />
								</p>
							</div>
						</div>

						<div id="stiker4">
							<div className="Sticker-body">
								<Image source="https://i.imgur.com/6XaGd4h.png" />
							</div>
							<div class="stiker_in">
								<p>
									ReactJS <i class="fa fa-ellipsis-h" />
								</p>
							</div>
						</div>
					</div>
				</div>
			</body>
		);
	}
}

export default Dashboard;
