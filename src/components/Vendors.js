import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { CSSTransition } from 'react-transition-group';
import VendorApplication from './VendorApplication';
import VendorCostsTable from './VendorCostsTable';

const Vendors = () => {
    const [showApplication, setShowApplication] = useState(false);
    return (
        <section id="vendors">
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
