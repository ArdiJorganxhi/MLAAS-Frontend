import React from 'react';
import './button.css'; // Import your CSS file for styling

const Button = ({ text, onClick }) => {
  return (
    <button className="rounded-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
