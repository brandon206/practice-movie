import types from '../actions/types';

const DEFAULT_STATE = {
    all_games: []
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_POPULAR_GAMES_DATA:
            console.log("getPopularGames Reducer: ", action);
            return state;
        default:
            return state;
    }
}