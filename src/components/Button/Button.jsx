import React from 'react';
import './Button.css';

const Button = ({ text, onClick, className, type = 'button' }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
