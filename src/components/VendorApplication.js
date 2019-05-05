import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import moment from 'moment';
import { applicationCosts } from './../utils/applicationCosts';

const VendorApplication = () => {
    const [vendorType, setVendorType] = useState(null);
    const [contactName, setContactName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyAddress1, setCompanyAddress1] = useState('');
    const [companyAddress2, setCompanyAddress2] = useState('');
    const [companyAddress3, setCompanyAddress3] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [agreeToTC, setAgreeToTC] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    if (vendorType
        && contactName.length
        && companyAddress1.length
        && contactEmail.length
        && contactEmail.length
        && contactPhone.length
        && agreeToTC
        && !formIsValid) {
            setFormIsValid(true);
    }

    const handleSubmit = (e, token, addresses) => {
        e.preventDefault();
        console.log('submitted');
    }

    const onToken  = () => {
        console.log('on token');
    }

    const now = moment();
    let applicationCost = 0;
    if (now.isBefore('2019-06-01') && vendorType) {
        applicationCost = applicationCosts[vendorType].early;
    } else if (now.isBetween('2019-06-02', '2019-06-16')) {
        applicationCost = applicationCosts[vendorType].regular;
    } else if (now.isBetween('2019-06-16', '2019-06-24')) {
        applicationCost = applicationCosts[vendorType].late;
    }

    return (
        <form>
            <h3>Vendor Application</h3>
            <div className="vendorType">
                <p>Vendor Type</p>
                <label className={`${vendorType === 'food' ? 'checked' : ''}`}>
                    <input
                        type="radio"
                        name="food"
                        value="food"
                        checked={vendorType === 'food'}
                        onChange={() => setVendorType('food')}
                    />
                    <span >Food</span>
                </label>
                <label className={`${vendorType === 'nonProfit' ? 'checked' : ''}`}>
                    <input
                        type="radio"
                        name="nonProfit"
                        value="nonProfit"
                        checked={vendorType === 'nonProfit'}
                        onChange={() => setVendorType('nonProfit')}
                    />
                    <span>Non-Profit</span>
                </label>
                <label className={`${vendorType === 'artsAndCrafts' ? 'checked' : ''}`}>
                    <input
                        type="radio"
                        name="artsAndCrafts"
                        value="artsAndCrafts"
                        checked={vendorType === 'artsAndCrafts'}
                        onChange={() => setVendorType('artsAndCrafts')}
                    />
                    <span>Arts and Crafts</span>
                </label>
                <label className={`${vendorType === 'other' ? 'checked' : ''}`}>
                    <input
                        type="radio"
                        name="other"
                        value="other"
                        checked={vendorType === 'other'}
                        onChange={() => setVendorType('other')}
                    />
                    <span>Other</span>
                </label>
            </div>
            
            <div className="contactInformation">
                <p>Contact Information</p>
                <label>
                    <span>Contact Name</span>
                    <input type="text" onChange={e => setContactName(e.target.value)} value={contactName} />
                </label>
                <label>
                    <span>Company Name</span>
                    <input type="text" onChange={e => setCompanyName(e.target.value)} value={companyName} />
                </label>
                <label>
                    <span>Company Address</span>
                    <input type="text" onChange={e => setCompanyAddress1(e.target.value)} value={companyAddress1} />
                    <input type="text" onChange={e => setCompanyAddress2(e.target.value)} value={companyAddress2} />
                    <input type="text" onChange={e => setCompanyAddress3(e.target.value)} value={companyAddress3} />
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" onChange={e => setContactEmail(e.target.value)} value={contactEmail} />
                </label>
                <label>
                    <span>Phone Number</span>
                    <input type="phone" onChange={e => setContactPhone(e.target.value)} value={contactPhone} />
                </label>
            </div>
            <div className="termsAndConditions">
                <label>
                    <input type="checkbox" checked={agreeToTC} onChange={() => setAgreeToTC(!agreeToTC)} />
                    <span>I agree to vendor terms and conditions</span>
                </label>
            </div>
            
            <button
                className={`${formIsValid ? '' : 'disabled'}`}
                disabled={!formIsValid}
                onClick={e => handleSubmit(e)}
            >
                Submit
            </button>
            <StripeCheckout 
                stripeKey=""
                token={onToken}
                amount={applicationCost}
                image="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
                description="Vendor Fee"
                locale="auto"
                name="nacip.com"
                zipCode
                billingAddress
                label="Pay with Cats"
            />
        </form>
    );
}

export default VendorApplication;
