import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';

import Login from './components/Login'
import FriendList from './components/FriendList'
import  PrivateRoute  from './components/PrivateRoute'
const Styled = styled.div `
  .links {
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    
    
    background-image: url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size:cover;
    .link{
      font-size:25px;
      color:black;
      text-decoration: none;
    }
    
  }
`
function App() {
  return (
    <Router>
    <Styled className="App">
      <div className="links">
        <Link className="link"to="/login">Login</Link>
        <Link  className="link"to="/friends">My Friends</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendList} />
        <Route path="/login" component={Login} />
      </Switch>
    </Styled>
    </Router>
  );
}

export default App;
