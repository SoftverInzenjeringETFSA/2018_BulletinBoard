import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SocialMediaPost.css';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import axios from 'axios';
import InstagramEmbed from 'react-instagram-embed';

class SocialMediaPost extends Component {
	
	
	constructor(props) {
        super(props);
	}

	
	  
	render() {	
        let embedPost;
        if(this.props.provider == 'INSTAGRAM')
            embedPost = 
            <InstagramEmbed
                url={this.props.url}
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        else
            embedPost =
            <FacebookProvider appId="250484768860813">
                <EmbeddedPost href={this.props.url} width="500" />
            </FacebookProvider>
	    return (
			<div className="section" >
                <div>
                    <div className="title">
                        {this.props.provider}
                    </div>
                    
                </div>
                {embedPost}
				
			</div>
			
		);
	}
}

export default SocialMediaPost;
