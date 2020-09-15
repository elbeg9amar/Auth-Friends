import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login'
import FriendList from './components/FriendList'
import  PrivateRoute  from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/friends">My Friends</Link>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendList} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
