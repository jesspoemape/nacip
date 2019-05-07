import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { applicationCosts } from './../utils/applicationCosts';
import StripeButton from './StripeButton';

export class VendorApplication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vendorType: null,
            contactName: '',
            companyName: '',
            companyAddress1: '',
            companyAddress2: '',
            companyAddress3: '',
            contactEmail: '',
            contactPhone: '',
            agreeToTC: false,
        }

        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateState(e) {
        if (e.target.name === 'agreeToTC') {
            this.setState(prevState => ({ agreeToTC: !prevState.agreeToTC }));
        } else {
             this.setState({ [e.target.name]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('here');
    }

    render() {
        const {
            vendorType,
            contactName,
            companyName,
            companyAddress1,
            companyAddress2,
            companyAddress3,
            contactEmail,
            contactPhone,
            agreeToTC,
        } = this.state;

        const now = moment();
        let applicationCost = 0;
        if (now.isBefore('2019-06-01') && vendorType) {
            applicationCost = applicationCosts[vendorType].early;
        } else if (now.isBetween('2019-06-02', '2019-06-16')) {
            applicationCost = applicationCosts[vendorType].regular;
        } else if (now.isBetween('2019-06-16', '2019-06-24')) {
            applicationCost = applicationCosts[vendorType].late;
        }

        const formIsValid = vendorType
        && contactName.length
        && companyName.length
        && companyAddress1.length
        && contactEmail.length
        && contactPhone.length
        && agreeToTC;

        return (
           
            <Fragment>
                 <form>
                    <h3>Vendor Application</h3>
                    <div className="vendorType">
                        <p>Vendor Type</p>
                        <label className={`${vendorType === 'food' ? 'checked' : ''}`}>
                            <input
                                type="radio"
                                name="vendorType"
                                value="food"
                                checked={vendorType === 'food'}
                                onChange={this.updateState}
                            />
                            <span >Food</span>
                        </label>
                        <label className={`${vendorType === 'nonProfit' ? 'checked' : ''}`}>
                            <input
                                type="radio"
                                name="vendorType"
                                value="nonProfit"
                                checked={vendorType === 'nonProfit'}
                                onChange={this.updateState}
                            />
                            <span>Non-Profit</span>
                        </label>
                        <label className={`${vendorType === 'artsAndCrafts' ? 'checked' : ''}`}>
                            <input
                                type="radio"
                                name="vendorType"
                                value="artsAndCrafts"
                                checked={vendorType === 'artsAndCrafts'}
                                onChange={this.updateState}
                            />
                            <span>Arts and Crafts</span>
                        </label>
                        <label className={`${vendorType === 'other' ? 'checked' : ''}`}>
                            <input
                                type="radio"
                                name="vendorType"
                                value="other"
                                checked={vendorType === 'other'}
                                onChange={this.updateState}
                            />
                            <span>Other</span>
                        </label>
                    </div>
                    
                    <div className="contactInformation">
                        <p>Contact Information</p>
                        <label>
                            <span>Contact Name</span>
                            <input type="text" name="contactName" onChange={this.updateState} value={contactName} />
                        </label>
                        <label>
                            <span>Company Name</span>
                            <input type="text" name="companyName" onChange={this.updateState} value={companyName} />
                        </label>
                        <label>
                            <span>Company Address</span>
                            <input type="text" name="companyAddress1" onChange={this.updateState} value={companyAddress1} />
                            <input type="text" name="companyAddress2" onChange={this.updateState} value={companyAddress2} />
                            <input type="text" name="companyAddress3" onChange={this.updateState} value={companyAddress3} />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" name="contactEmail" onChange={this.updateState} value={contactEmail} />
                        </label>
                        <label>
                            <span>Phone Number</span>
                            <input type="phone" name="contactPhone" onChange={this.updateState} value={contactPhone} />
                        </label>
                    </div>
                    <div className="termsAndConditions">
                        <label>
                            <input type="checkbox" name="agreeToTC" checked={agreeToTC} onChange={this.updateState} />
                            <span>I agree to vendor terms and conditions</span>
                        </label>
                    </div>
                    
                    <button
                        className={`${formIsValid ? '' : 'disabled'}`}
                        disabled={!formIsValid}
                        onClick={e => this.handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
                <StripeButton amount={applicationCost} vendorType={vendorType} />
            </Fragment>
        );
    }
}

export default VendorApplication;
