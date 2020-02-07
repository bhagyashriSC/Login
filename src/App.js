
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Logout from './components/Logout/Logout.jsx';
import './App.css';
class App extends React.Component{
  render(){
    return(
      <>
      <div class="App ">
      
        <BrowserRouter>
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
    
      <li> <Link to="/">Login</Link></li>
      <Link to="/logout">Logout</Link>
      
    </ul>
  </div>
</nav>

      
      <hr/>
      <Route exact path="/" component={Login} />
      <Route exact path="/logout" component={Logout} /> 
      </BrowserRouter>
       
        </div>
   </>
    )
  }
}

export default App;