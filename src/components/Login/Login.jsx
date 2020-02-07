import React, { Component } from 'react';
import Textbox from '../../components/uiElements/Textbox.jsx';
import Button from '../../components/uiElements/Button.jsx';
import EmployeeList from '../../components/EmployeeList/EmployeeList.jsx';
let loginCredential ={
  username:"hruday@gmail.com",
  password : "hruday123"
 }
class Login extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state ={
      username:'',
      password :'',
      login: false,
      LoginError: false
    }
 
  }
  
  handleClick(){
    if(this.state.username === loginCredential.username && this.state.password === loginCredential.password){
      this.setState({ login: true, LoginError: false});
    }
    else{
      this.setState({ login: false, LoginError: true});
      
    }
    
  }
  render() {
    return (
      <>
     {this.state.LoginError ? 
    	<div className="alert alert-danger">
      Login credentials are wrong.
      </div>: ''}
      {!this.state.login? 
      <div className="App " id="login">
        <div className="login-card">
        <h1>Login</h1>
        <Textbox 
        type="text"
        placeholder="Enter Username Here"
        value={ this.state.username}       
        onChange={(val) => {        
           this.setState({ username: val });
         
      }}
        />

        <Textbox 
        type="password"
        placeholder="Enter password Here"
        value={ this.state.password}
        onChange={(val) => {         
           this.setState({ password: val });         
      }}
      required = {this.required}
        />
        <Button
        value="Login" 
        onClick={this.handleClick}/>
      </div>
      </div>
      : <EmployeeList />}
      </>
    );
  }
}

export default Login;