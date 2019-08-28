import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import SearchReducer from '../Reducers/SearchReducer';

const store=createStore(
    combineReducers({
        searchRed:SearchReducer,
    }),applyMiddleware(thunk)
);

export default store;