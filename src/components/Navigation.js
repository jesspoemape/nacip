import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navigation = (props) => {
    const path = props.location.pathname.slice(1);
    return (
        <nav>
            <Link to="/" className={!path ? 'active' : ''}>Home</Link>
            <Link to="/about" className={path === 'about' ? 'active' : ''}>About</Link>
            <Link to="/vendors" className={path === 'vendors' ? 'active' : ''}>Vendors</Link>
            <Link to="/become-a-sponsor" className={path === 'become-a-sponsor' ? 'active' : ''}>Become A Sponsor</Link>
        </nav>
    );
}

export default withRouter(Navigation);
