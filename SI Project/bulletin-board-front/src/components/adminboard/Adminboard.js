import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { CSVLink } from 'react-csv';
import './Adminboard.css';
import axios from 'axios';


class Adminboard extends Component {

  state = {
      toLogin: false,
      unauthorized: false,
      users: [],
      filteredUsers: [],
      filters: {}
  };
  handleClick(e) {
     axios.post('/logmeout', {})
      .then(response => this.setState({toLogin: true}))
      .catch( error => console.log(error));
  }
  handleInput(e) {
      if (e.target.value){
        if (this.state.filters && this.state.filters.hasOwnProperty(e.target.name))
            delete this.state.filters[e.target.name];
        this.state.filters = Object.assign({[e.target.name]: e.target.value}, this.state.filters );
      }
      else{
         delete this.state.filters[e.target.name];
      }
      this.setState({filteredUsers: this.state.users.filter(user => Array.from(Object.keys(this.state.filters)).every(
                                                        f => ~user[f].toLowerCase().indexOf(this.state.filters[f].toLowerCase())
                                                        ))});
  }
  deleteUser(username){
    axios.post('/deleteUser', {username: username})
      .then(response => this.setState({users: response.data.filter(el => el.role != "admin"), filteredUsers: response.data.filter(el => el.role != "admin")}))
      .catch( error => console.log(error));
  }
  componentWillMount() {
    axios.get('/welcome', {})
      .then(response => 
          axios.get('/getAllUsers', {})
          .then(response => this.setState({users: response.data.filter(el => el.role != "admin"), filteredUsers: response.data.filter(el => el.role != "admin")}))
          .catch( error => console.log(error))
        )
      .catch( error => this.setState({unauthorized: true}));
      
  }
  render() {
    if (this.state.toLogin === true) {
      return <Redirect to='/login' />
    }
    if (this.state.unauthorized === true) {
      return <Redirect to='/login' />
    }
    let header = <tr id="header">
                    <th>User Name</th>
                    <th>User First Name</th>
                    <th>User Last Name</th>
                    <th>User Email</th>
                    <th>Delete User</th>
                    <th>Ban User</th>
                    <th>Update User</th>

                  </tr>;
    let filter = <tr id="filter">
                    <td>
                      <input type="text" name="username" placeholder="filter username" onChange = { e => this.handleInput(e)}/>
                    </td>
                    <td>
                      <input type="text" name="firstName" placeholder="filter firstname" onChange = { e => this.handleInput(e)}/>
                    </td>
                    <td>
                      <input type="text" name="lastName" placeholder="filter lastname" onChange = { e => this.handleInput(e)}/>
                    </td>
                    <td>
                      <input type="text" name="email" placeholder="filter email" onChange = { e => this.handleInput(e)}/>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                </tr>;
    let rows = this.state.filteredUsers.map(user =>  <tr key={user.id} className="rows">
                                                  <td>{user.username}</td>
                                                  <td>{user.firstName}</td>
                                                  <td>{user.lastName}</td>
                                                  <td>{user.email}</td>
                                                  <td><a className="delete-link" onClick={() => this.deleteUser(user.username)}>Delete</a></td>
                                                  <td><a className="ban-link" >Ban</a></td>
                                                  <td><Link className="update-link" to="/update">Update</Link></td>
                                              </tr>
                                    );
    return (
      <div>
        <table id="table">
          <tbody> 
            {header}
            {filter}
            {rows} 
          </tbody>
        </table>
       <span>
            Generisi <CSVLink data={this.state.filteredUsers.map(user => { let {id, password, ...rest} = user; return rest;})} className="csv-link" filename="bulletin_users.csv">
            CSV ⬇</CSVLink> izvjestaj
        </span>
        <div className="bottom-link">
            <a onClick={(e) => this.handleClick(e)} id="logout">Log out</a>
        </div>
      </div>
    );
    
  }
}

export default Adminboard;


