import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <p>The Native American Celebration in the Park</p>
            <section>
                <a
                    href="https://www.facebook.com/nacippowwow"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://twitter.com/NACIPPowwow"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </section>
        </footer>
    );
}

export default Footer;
