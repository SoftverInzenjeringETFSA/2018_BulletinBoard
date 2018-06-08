import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../App';
import Dashboard from '../components/dashboard/Dashboard';
import Adminboard from '../components/adminboard/Adminboard';
import Help from '../components/help/Help';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Preferences from '../components/preferences/Preferences';

export default (
  <Router>
    <App>
      <Route path="/help" component={Help}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/adminboard" component={Adminboard}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/preferences" component={Preferences}/>
      <Route exact={true} path="/" component={Dashboard}/>
    </App>
  </Router>
);