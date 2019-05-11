import axios from 'axios';
import {
    STRIPE_PAYMENT_SUCCESS,
    STRIPE_PAYMENT_FAILURE,
    POST_FORM_DATA_SUCCESS,
    POST_FORM_DATA_FAILURE,
    SAVE_FORM_DATA,
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
    // For integration instructions, see
    // https://github.com/jamiewilson/form-to-google-sheets
    const formattedFormData = Object.keys(form).reduce((formData, key) => {
        formData.append(key, form[key]);
        return formData;
    }, new FormData());

    const url = 'https://script.google.com/macros/s/AKfycbz23PL0CfDjt70NeBXQwct7hI7fHMh2-xCqMWuqg3Ij8xdWAoc/exec';
    axios.post(url, formattedFormData)
        .then(response => {
            console.log('success');
            dispatch({ type: POST_FORM_DATA_SUCCESS, payload: response });
        })
        .catch(error => {
            console.log('fail');
            dispatch({ type: POST_FORM_DATA_FAILURE, payload: error });
        });
};

export const saveFormDataToStore = form => (dispatch) => {    
    dispatch({ type: SAVE_FORM_DATA, payload: form });
}