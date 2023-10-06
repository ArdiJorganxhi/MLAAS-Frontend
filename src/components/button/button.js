import React from 'react';
import './button.css';

const Button = (props) => {
  const buttonStyle = {
    width: props.width || "auto",
    height: props.height || "auto"
  }
  return (
    <button className="rounded-button" style={buttonStyle} onClick={props.onClick} onSubmit={props.onSubmit}>
      {props.text}
    </button>
  );
};

export default Button;
