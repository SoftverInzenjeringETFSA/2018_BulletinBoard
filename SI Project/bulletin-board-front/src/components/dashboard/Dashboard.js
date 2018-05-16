import React, { Component } from 'react';
import './Dashboard.css';
import Post from '../post/Post';

class Dashboard extends Component {
  render() {
    
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
                    <a  id="logout">Log out</a>
                </div>
                    
            </div>
        </div >

      <div id="kontejner">
              <h1 class="site-title" id="naslov">Naslovnica</h1>
              
              <div id="stiker1"> 
                  <p>     </p>
                  <Post/>
                  <div class="stiker_in">
                      <p>Opis slike <i class="fa fa-ellipsis-h"></i></p>
                  </div>
              </div>

              <div id="stiker2">
                      <i class="fa fa-ellipsis-h"></i>
                      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                          Velit rerum odit quisquam. Ducimus dolores cupiditate cumque, 
                          magnam quae ut reprehenderit perferendis commodi.</p>
                  
              </div>

              <div id="stiker3"> 
                  <p>      </p>
                  <div class="stiker_in">
                      <p>Opis slike <i class="fa fa-ellipsis-h"></i></p>
                  </div>
              </div>

              <div id="stiker4">
                  <p>      </p>
                  <div class="stiker_in">
                      <p>Opis slike <i class="fa fa-ellipsis-h"></i></p>
                  </div>
              </div>

      </div>
</div>
      </body>
    );
  }
}

export default Dashboard;
