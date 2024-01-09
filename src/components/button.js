import React, { useRef } from 'react';
import '../styles/button.css';

const Button = ({ children }) => {
  const buttonRef = useRef(null);

  return (
    <button ref={buttonRef} className="gradient-button">
      {children}
    </button>
  );
};

export default Button;