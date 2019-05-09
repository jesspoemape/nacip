import { STRIPE_PAYMENT_SUCCESS, STRIPE_PAYMENT_FAILURE } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function (state = INITIAL_STATE.stripe, actions) {
    switch (actions.type) {
        case STRIPE_PAYMENT_SUCCESS:
            return 'success';
        case STRIPE_PAYMENT_FAILURE:
            return 'failure';
        default:
            return state;
    }
}
