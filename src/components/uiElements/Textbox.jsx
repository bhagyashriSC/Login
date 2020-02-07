import React, { Component } from 'react';
import './Textbox.css';
let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;  
class Textbox extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.props.onChange;
    this.state= {value:'', errorMessage: false}
  }
  handleChange(e) { 
    
    let str = e.target.value.toString(); 
    
   if(this.props.type === "email"){    
    let res = str.match(regexEmail);
    if(res === null) {     
      this.setState({errorMessage:true});   
    }    
    else{
      this.setState({errorMessage:false});
    }
   }
   if(this.props.type === "password"){
    
    if(str === "") {
      this.setState({errorMessage:true});   
    }   
    else{
      this.setState({errorMessage:false});
    }
   }
  
    this.setState({value: e.target.value});    
    this.onChange(e.target.value);
  }

  render() {
    return (
      <>
        <input
         type={this.props.type}  
         className='form-control' 
         value={this.props.value ? this.props.value : this.state.value}
         placeholder={this.props.placeholder} 
         onChange={(e) => this.handleChange(e)}
         required ={this.props.requried}
         errorMessage= {this.state.errorMessage? this.props.errorMessage :''}
         />
         <span className="alertMessage">{this.state.errorMessage? this.props.errorMessage :''}</span>
      </>
    );
  }
}

export default Textbox;