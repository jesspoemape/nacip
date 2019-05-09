import React, { useEffect } from "react";
import { connect } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { toast } from 'react-toastify';
import * as actions from './../actions';

const StripeButton = ({ amount, children, setShowApplication, postStripePayment, stripe }) => {
    const publishableKey = "pk_test_gEdJvOYvEMSITbvwdoZ05jnf00FULwrN5f";

    useEffect(() => {
        if (stripe === 'success') {
            const successContent = (
                <div className="successContent">
                    <p>Your payment was successful!</p>
                    <span>You will receive an emailed receipt shortly.</span>
                </div>
            );
            setShowApplication(false);
            showToast(successContent, {
                position: 'top-center',
                autoClose: 10000,
                pauseOnHover: true,
            });
        }
    }, [setShowApplication, stripe]);
    
    const showToast = (content, options) => {
        toast(content, options);
    };

    const onToken = token => {
        const body = {
            amount: amount,
            token: token
        };
        
        postStripePayment(body);
    };
    return (
        <StripeCheckout
            label="Checkout" //Component button text
            name="NACIP" //Modal Header
            description="Pay for your vendor application"
            panelLabel="Submit Payment of" //Submit button in modal
            amount={amount} //Amount in cents $9.99
            token={onToken}
            stripeKey={publishableKey}
            image="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" //Pop-in header image
            billingAddress
            allowRememberMe={false}
        >
            {children}
        </StripeCheckout>
    );
};

function mapStateToProps({ stripe, form }) {
    return { stripe, form };
}

export default connect(mapStateToProps, actions)(StripeButton);
