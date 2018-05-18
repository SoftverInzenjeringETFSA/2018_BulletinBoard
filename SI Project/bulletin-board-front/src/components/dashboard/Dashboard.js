import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Dashboard.css';
import Post from '../post/Post';
import Image from '../image/Image';
import SocialMediaPost from '../socialMediaPost/SocialMediaPost';
import axios from 'axios';


class Dashboard extends Component {


  state = {
        toLogin: false,
        unauthorized: false
  };
  handleClick(e) {
     axios.post('/logmeout', {})
      .then(response => this.setState({toLogin: true}))
      .catch( error => console.log(error));
  }
  componentWillMount() {
      axios.get('/welcome', {})
      .then(response => console.log(response))
      .catch( error => this.setState({unauthorized: true}));
  }

  render() {
      /*
    if (this.state.toLogin === true) {
      return <Redirect to='/login' />
    }
    if (this.state.unauthorized === true) {
      return <Redirect to='/login' />
    }*/
    return (
      <body background="pinboard.jpg">
      <div id="glavniKontejner">
        <div id="side">
  
            <div >
            </div>
            <div >
                <i id="user-icon" class="fa fa-user"></i>
            <i id="plus-icon"class="fa fa-plus"></i>
                <div class="bottom-link">
                    <a onClick={(e) => this.handleClick(e)} id="logout">Log out</a>
                </div>
                    
            </div>
        </div>

      <div id="kontejner">
              <h1 class="site-title" id="naslov">Naslovnica</h1>
              
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
                  <p>     </p>
                  <Post/>
                </div>
              </div>

              <div id="stiker2">
                <div className="Sticker-body"> 
                    <i class="fa fa-ellipsis-h"></i>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Velit rerum odit quisquam. Ducimus dolores cupiditate cumque, 
                        magnam quae ut reprehenderit perferendis commodi.</p>
                </div>
              </div>

              <div id="stiker3">
                <div className="Sticker-body"> 
                    <Image source="http://www.bioinfo.ba/ETF_logo.gif"/>
                </div>
                <div class="stiker_in">
                    <p>ETF Logo<i class="fa fa-ellipsis-h"></i></p>
                </div>
            </div>

              <div id="stiker4">
                <div className="Sticker-body"> 
                    <Image source="https://i.imgur.com/6XaGd4h.png"/>
                </div>
                  <div class="stiker_in">
                      <p>ReactJS <i class="fa fa-ellipsis-h"></i></p>
                  </div>
              </div>

      </div>
</div>
      </body>
    );
  }
}

export default Dashboard;
