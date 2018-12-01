import types from './types';
import axios from 'axios';

const BASE_URL = "http://https://api-endpoint.igdb.com/games/";
const API_KEY = "?user-key=360a028706da183754fcee8c2ac15aed";
const ACCEPT = "?Accept=application/json";
const FIELDS = "?fields=name,genres.name,popularity";
const EXPAND = "&order=popularity:desc&expand=genres";

export function getPopularGamesData (){

    const resp = axios.get(BASE_URL+API_KEY+ACCEPT+FIELDS+EXPAND);

    return {
        type: types.GET_POPULAR_GAMES_DATA,
        payload: resp
    }
}

