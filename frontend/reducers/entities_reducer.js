import {combineReducers} from 'redux';

import usersReducer from "./user_reducer";
import housesReducer from './houses_reducer'
import reservationsReducer from './reservations_reducer';
import ratingsReducer from './ratings_reducer'
import favoritesReducer from './favorite_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    houses: housesReducer,
    reservations: reservationsReducer,
    ratings: ratingsReducer,
    favorites: favoritesReducer
})

export default entitiesReducer;