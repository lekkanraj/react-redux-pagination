import {createStore,combineReducers} from 'redux';
import SearchReducer from '../Reducers/SearchReducer';

const store=createStore(
    combineReducers({
        searchRed:SearchReducer,
    }),{}
);

export default store;