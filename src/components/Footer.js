import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <p><strong>The Native American Celebration in the Park</strong></p>&nbsp;|&nbsp;
            <p>nacippowwow@gmail.com</p>   
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
