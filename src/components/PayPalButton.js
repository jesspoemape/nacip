import React, { useState, useEffect, ReactDOM } from 'react';
import scriptLoader from 'react-async-script-loader';

const PayPalButton = ({
    isScriptLoadSucceed,
    isScriptLoaded,
    total,
    currency,
    env,
    commit,
    client,
    onSuccess,
    onError,
    onCancel,
}) => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        if (isScriptLoaded && isScriptLoadSucceed && !showButton) {
            console.log('here');
            setShowButton(true);
        }
    }, [isScriptLoaded, isScriptLoadSucceed, showButton]);

    const paypal = window.paypal;
    let PPButton = paypal && paypal.Button.driver('react', { React, ReactDOM });

    const payment = () => {
        paypal.rest.payment.create(env, client, {
            transacions: [
                {
                    amount: {
                        total,
                        currency,
                    },
                },
            ],
        });
    };
    const onAuthorize = (data, actions) => {
        actions.payment.execute()
            .then(() => {
            const payment = {
                paid: true,
                cancelled: false,
                payerID: data.payerID,
                paymentID: data.paymentID,
                paymentToken: data.paymentToken,
                returnUrl: data.returnUrl,
            };

          onSuccess(payment);
        });
    };
    console.log('showButton', showButton);
    return (
        <div>
        {showButton && PPButton && (
            <PPButton
                env={env}
                client={client}
                commit={commit}
                payment={payment}
                onAuthorize={onAuthorize}
                onCancel={onCancel}
                onError={onError}
            />
          )}
        </div>
    );
}

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PayPalButton);
