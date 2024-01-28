import React from 'react';
import Button from '../components/common/button';
import '../styles/campContact.css';

const CampContact = ({priceRange, phone, website}) => {
    return (
        <div id="campContact">
            <div className="cg-price">
                <h3>Pricing</h3>
                { priceRange && (
                    <span className="price"><span className="dol">$</span>{priceRange[0]} - <span className="dol">$</span>{priceRange[1]}</span>
                )}
            </div>
            
            <div className="cg-contact">
                <h3>Contact Info</h3>
                <div className="cg-phone">{phone}</div>
                <div className="cg-website">{website}</div>
                <Button className="btn">Book online</Button>
            </div>
        </div>
    )
};

export default CampContact;