import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from 'react-toastify';

const StripeButton = ({ amount, children, setShowApplication }) => {
    const publishableKey = "pk_test_gEdJvOYvEMSITbvwdoZ05jnf00FULwrN5f";

    const onToken = token => {
        const body = {
            amount: amount,
            token: token
        };
        axios.post("http://localhost:8000/payment", body)
            .then(response => {
                const successContent = (
                    <div className="successContent">
                        <p>Your payment was successful!</p>
                        <span>You will receive an emailed receipt shortly.</span>
                    </div>
                );

                setShowApplication(false);
                toast.default(successContent, {
                    position: 'top-center',
                    autoClose: 10000,
                    pauseOnHover: true,
                });

            })
            .catch(error => {
                alert("Payment Error");
            });
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
export default StripeButton;