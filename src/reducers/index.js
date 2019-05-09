import { combineReducers } from 'redux';
import stripeReducer from './stripeReducer';
import formReducer from './formReducer';

export default combineReducers({
    stripe: stripeReducer,
    form: formReducer,
});
