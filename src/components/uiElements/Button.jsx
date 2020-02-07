import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
  render() {
    return (
      <>
        <button         
         value={this.props.value}
         onClick={this.props.onClick}
         >{this.props.value}
        </button>
      </>
    );
  }
}

export default Button;