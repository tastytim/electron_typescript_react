import {combineReducers, createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './../reducers/category'



const store = createStore(
    combineReducers({
        category:categoryReducer,
    }),
    {},
    applyMiddleware(thunk)
);

export default store;