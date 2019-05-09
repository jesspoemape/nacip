import { POST_FORM_DATA_SUCCESS, POST_FORM_DATA_FAILURE } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function (state = INITIAL_STATE.form, actions) {
    switch (actions.type) {
        case POST_FORM_DATA_SUCCESS:
            return 'success';
        case POST_FORM_DATA_FAILURE:
            return 'failure';
        default:
            return state;
    }
};
