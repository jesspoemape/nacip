import {
    POST_FORM_DATA_SUCCESS,
    POST_FORM_DATA_FAILURE,
    SAVE_FORM_DATA,
    RESET_FORM,
} from '../actions/types';
import INITIAL_STATE from './initialState';

export default function (state = INITIAL_STATE.form, actions) {
    switch (actions.type) {
        case POST_FORM_DATA_SUCCESS:
            return 'success';
        case POST_FORM_DATA_FAILURE:
            return 'failure';
        case SAVE_FORM_DATA:
            return actions.payload;
        case RESET_FORM:
            return {};
        default:
            return state;
    }
};
