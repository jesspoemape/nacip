import React, { useState, Fragment } from 'react';
import moment from 'moment';
import axios from 'axios';
import { applicationCosts } from './../utils/applicationCosts';
import StripeButton from './StripeButton';

const VendorApplication = ({ setShowApplication }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const userId = Date.now();
        const parsedData = JSON.parse(stringifyFormData(data));
        Object.keys(parsedData).forEach(itemKey => {
            const item = parsedData[itemKey];
            if (item.length === 0) {
                delete parsedData[itemKey];
                
            };
        });
        console.log('parsedData::', parsedData);
        const fakeData = {
            "Vendor Type": vendorType,
            "Contact Name": contactName,
            "Company Name": companyName,
            "Company Address 1": companyAddress1,
            "Company Address 2": companyAddress2, 
            "Company Address 2": companyAddress3, 
            "Contact Email": contactEmail,
            "Contact Phone": contactPhone,
            "Accepted Terms and Conditions": agreeToTC,
            "Date": new Date(),
        };
        const sheetsScriptURL = process.env.SHEETS_SCRIPT_URL;
        axios.post(sheetsScriptURL, { data: fakeData })
            .then(() => {
                alert('Form Submitted!')
                resetForm();
            })
            .catch(e => {
                console.log('ERROR:: ', e);
            }
        );
    }

    const stringifyFormData = (fd) => {
        const data = {};
          for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 2);
    }

    const resetForm = () => {
        setVendorType(null);
        setContactName('');
        setCompanyName('');
        setCompanyAddress1('');
        setCompanyAddress2('');
        setCompanyAddress3('');
        setContactEmail('');
        setContactPhone('');
        setAgreeToTC(false);
        setFormIsValid(false);
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
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h3>Vendor Application</h3>
                <div className="vendorType">
                <hr />
                    <p>Vendor Type</p>
                    <label className={`${vendorType === 'food' ? 'checked' : ''}`}>
                        <input
                            type="radio"
                            name="Vendor Type"
                            value="food"
                            checked={vendorType === 'food'}
                            onChange={() => setVendorType('food')}
                        />
                        <span >Food</span>
                    </label>
                    <label className={`${vendorType === 'nonProfit' ? 'checked' : ''}`}>
                        <input
                            type="radio"
                            name="Vendor Type"
                            value="nonProfit"
                            checked={vendorType === 'nonProfit'}
                            onChange={() => setVendorType('nonProfit')}
                        />
                        <span>Non-Profit</span>
                    </label>
                    <label className={`${vendorType === 'artsAndCrafts' ? 'checked' : ''}`}>
                        <input
                            type="radio"
                            name="Vendor Type"
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
                        <input
                            type="text"
                            onChange={e => setContactName(e.target.value)}
                            value={contactName}
                            name="Contact Name"
                        />
                    </label>
                    <label>
                        <span>Company Name</span>
                        <input
                            type="text"
                            onChange={e => setCompanyName(e.target.value)}
                            value={companyName}
                            name="Company Name"
                        />
                    </label>
                    <label>
                        <span>Company Address</span>
                        <input
                            type="text"
                            onChange={e => setCompanyAddress1(e.target.value)}
                            value={companyAddress1}
                            name="Company Address 1"
                        />
                        <input
                            type="text"
                            onChange={e => setCompanyAddress2(e.target.value)}
                            value={companyAddress2}
                            name="Company Address 2"
                        />
                        <input
                            type="text"
                            onChange={e => setCompanyAddress3(e.target.value)}
                            value={companyAddress3}
                            name="Company Address 3"
                        />
                    </label>
                    <label>
                        <span>Email</span>
                        <input
                            type="email"
                            onChange={e => setContactEmail(e.target.value)}
                            value={contactEmail}
                            name="Contact Email"
                        />
                    </label>
                    <label>
                        <span>Phone Number</span>
                        <input
                            type="phone"
                            onChange={e => setContactPhone(e.target.value)}
                            value={contactPhone}
                            name="Contact Phone"
                        />
                    </label>
                </div>
                <div className="termsAndConditions">
                    <label>
                        <input
                            type="checkbox"
                            checked={agreeToTC}
                            onChange={() => setAgreeToTC(!agreeToTC)}
                            name="Accepted Terms and Conditions"
                        />
                        <span>I agree to vendor terms and conditions</span>
                    </label>
                </div>
                
                
            </form>
            <StripeButton amount={applicationCost} vendorType={vendorType} setShowApplication={setShowApplication}>
                <button
                    className={`${formIsValid ? '' : 'disabled'}`}
                    disabled={!formIsValid}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </StripeButton>
        </Fragment>

    );
}

export default VendorApplication;
