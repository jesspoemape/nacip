import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { CSSTransition } from 'react-transition-group';
import VendorApplication from './VendorApplication';
import VendorCostsTable from './VendorCostsTable';

const Vendors = () => {
    const [showApplication, setShowApplication] = useState(false);
    return (
        <section id="vendors">
            <h2>Vendors</h2>
            <div>
                <h3>Mandatory Vendor Meeting</h3>
                <p>Date: July 17, 2019</p>
                <p>Time: 6pm-7pm</p>
                <p>Place: TBA</p>

                <p>Booth numbers will be assigned at the meeting.</p>
            </div>
            <div>
            <a href="https://docs.google.com/document/d/1iSASorNz5M1uYIK4oO9uC3B5qK39uWVsyhuhJbXWuho/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                See Vendor Agreement here.
            </a>
            </div>
            <VendorCostsTable />
            <AnimateHeight duration={800} height={showApplication ? 'auto' : 0}>
                <CSSTransition in={showApplication} timeout={1200} classNames="vendorApplication">
                    <VendorApplication setShowApplication={setShowApplication} />
                </CSSTransition>
            </AnimateHeight>
            <CSSTransition in={!showApplication} timeout={300} classNames="becomeAVendorButton">
                <button className="becomeAVendor" onClick={() => setShowApplication(true)}>Become a Vendor</button>
            </CSSTransition>
        </section>
    );
}

export default Vendors;
