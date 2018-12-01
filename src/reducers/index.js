import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import popularGamesReducer from './popularGames_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers ({
    form: formReducer,
    popularGames: popularGamesReducer,
    user: userReducer
});

export default rootReducer;