import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button className="rounded-button" onClick={props.onClick} onSubmit={props.onSubmit}>
      {props.text}
    </button>
  );
};

export default Button;
