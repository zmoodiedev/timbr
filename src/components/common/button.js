import React from 'react';
import '../../styles/button.css';

const Button = ({ className, onClick, type, href, children }) => {

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;