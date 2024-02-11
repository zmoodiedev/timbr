import React from 'react';

const Tip = ({ title, body }) => {
    console.log(title, body); // For debugging
    return (
        <div className="tip-card">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Tip;