
import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import {BrowserRouter, Link,Route} from'react-dom';
class Header extends Component {
    render() {
  return (
   <>
   <BrowserRouter>
        <div className="container">
       <ul>
         <li><Link to="/login">Login</Link></li>
       </ul>
      <hr/>
      <Route exact path="/login" component={Login} /> 
        </div>
    </BrowserRouter>
</>
  );
}
}

export default Header;
