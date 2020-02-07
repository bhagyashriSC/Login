import React, { Component } from 'react';
import {combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import './EmployeeList.css';

const EmployeeDetail = function() {
  return [
    {
      "id":1,
      "name":"test1",
      "age" : "11",
      "gender":"male",
      "email" : "test1@gmail.com",
      "phoneNo" : "9415346313"
      },
      {
      "id" : 2,
      "name":"test2",
      "age" : "12",
      "gender":"male",
      "email" : "test2@gmail.com",
      "phoneNo" : "9415346314"
      },
      {
      "id":3,
      "name":"test3",
      "age" : "13",
      "gender":"male",
      "email" : "test3@gmail.com",
      "phoneNo" : "9415346315"
      },
      {
      "id":4,
      "name":"test4",
      "age" : "14",
      "gender":"male",
      "email" : "test4@gmail.com",
      "phoneNo" : "9415346316"
      },
      {
      "id":5,
      "name":"test5",
      "age" : "15",
      "gender":"male",
      "email" : "test5@gmail.com",
      "phoneNo" : "9415346317"
      },
      {
      "id":6,
      "name":"test6",
      "age" : "16",
      "gender":"male",
      "email" : "test6@gmail.com",
      "phoneNo" : "9415346318"
      }
  ]
}
const rootReducer = combineReducers({
  EmployeeDetails: EmployeeDetail
});

class EmployeeDetailList extends React.Component{
 
  render() {    
    return (
      <div className="container mrg-top-20">
      <h3>Employee List</h3>
    <table className="list-group">      
    <tr>
      <th>name</th>
      <th>age</th>
      <th>gender</th>
      <th>email</th>   
      <th>phoneNo</th>
    </tr>     
        {
            this.props.EmployeeDetails.map(item => 
              <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.phoneNo}</td>
            </tr>
            )
        }  
   </table>
   </div>)
  } 
}
function mapStateToProps(state){  
  return{
    EmployeeDetails: state.EmployeeDetails
  }
}
EmployeeDetailList = connect(mapStateToProps)(EmployeeDetailList);

const store = createStore(rootReducer)
class EmployeeList extends React.Component {
  render() {
    return (
    <div>
        <Provider store={store}>
          <EmployeeDetailList />
        </Provider>
      </div>)
  }
}
export default EmployeeList;
