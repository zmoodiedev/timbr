import React from 'react';
import '../styles/button.css';

const Button = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  );
};

export default Button;