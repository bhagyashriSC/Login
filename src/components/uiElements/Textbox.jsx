import React, { Component } from 'react';
import './Textbox.css';
class Textbox extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.props.onChange;
    this.state= {value:''}
  }
  handleChange(e) {       
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
         />
      </>
    );
  }
}

export default Textbox;