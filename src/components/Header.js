import React from 'react';
import { withRouter } from "react-router-dom";
import Navigation from './Navigation';

const Header = (props) => {
    const path = props.location.pathname.slice(1);
    if (path) {
        return (
            <header className="minimalHeader">
                <h1>
                    NACIP <br/>
                    <span>Powwow and Festival</span>
                </h1>
                <Navigation />
            </header>
        );
    }
    return (
        <header className="homePageHeader">
            <h1>The Native American Celebration in the Park</h1>
            <Navigation />
        </header>
    )
}

export default withRouter(Header);
