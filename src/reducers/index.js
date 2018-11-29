import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import quotesReducer from './quotes_reducer';
import userReducer from './userReducer';

const rootReducer = combineReducers ({
    form: formReducer,
    quotes: quotesReducer,
    user: userReducer
});

export default rootReducer;