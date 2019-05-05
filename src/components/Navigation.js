import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/vendors">Vendors</Link>
            <Link to="/become-a-sponsor">Become A Sponsor</Link>
        </nav>
    );
}

export default Navigation;
