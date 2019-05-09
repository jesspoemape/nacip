import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <section>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />          
            </section>
            <p>The Native American Celebration in the Park</p>
        </footer>
    );
}

export default Footer;
