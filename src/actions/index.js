import axios from 'axios';
import {
    STRIPE_PAYMENT_SUCCESS,
    STRIPE_PAYMENT_FAILURE,
    POST_FORM_DATA_SUCCESS,
    POST_FORM_DATA_FAILURE,
} from './types';

export const postStripePayment = body => (dispatch) => {
    axios.post('http://localhost:8000/payment', body)
        .then(response => {
            dispatch({ type: STRIPE_PAYMENT_SUCCESS });
        })
        .catch(error => {
            dispatch({ type: STRIPE_PAYMENT_FAILURE });
        });
};

export const postFormDataToSheets = form => (dispatch) => {
    axios.post(process.env.SHEETS_SCRIPT_URL, form)
        .then(response => {
            dispatch({ type: POST_FORM_DATA_SUCCESS, payload: response });
        })
        .catch(error => {
            dispatch({ type: POST_FORM_DATA_FAILURE, payload: error });
        });
};