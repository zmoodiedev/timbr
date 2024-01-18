import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

function Footer() {
    return (
        <footer>
            <div id="megaFooter" className="container">
                <div className="logo">
                    <a href="/">tmbr</a>
                </div>
                <div className="support">
                    <h4>Support</h4>
                    <ul className="footer-nav">
                        <li><a href="/">Help Center</a></li>
                        <li><a href="/">Request a Listing Update</a></li>
                    </ul>
                </div>
                <div className="corporate">
                    <h4>timbr</h4>
                    <ul className="footer-nav">
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Advertise With Us</a></li>
                        <li><a href="/">Submit a Listing</a></li>
                        <li><a href="/">Report a Listing</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div id="lilFooter" className="container">
                <div className="terms">©2024 Timbr, Inc.  •  Privacy  •  Terms  •  Sitemap</div>
                <div className="social">
                    <ul> 
                        <li><Link><FontAwesomeIcon icon={faInstagram} /></Link></li>
                        <li><Link><FontAwesomeIcon icon={faXTwitter} /></Link></li>
                        <li><Link><FontAwesomeIcon icon={faFacebook} /></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;