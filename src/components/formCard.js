import React from 'react';
import '../styles/formCard.css';

const FormCard = ({title, children}) => {
    return (
        <div className="form-card">
            <h1>{title}</h1>
            {children}
        </div>
    )
};

export default FormCard;
