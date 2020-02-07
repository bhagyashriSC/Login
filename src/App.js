
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
            <Link class="navbar-brand" to="/">Logo</Link>
          </div>
          <div class="nav navbar-nav">          
             <Link to="/">Home</Link>          
          </div>
        </div>
</nav>

      
      <hr/>
      <Route exact path="/" component={Login} />
      
      </BrowserRouter>
       
        </div>
   </>
    )
  }
}

export default App;