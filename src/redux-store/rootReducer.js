import { combineReducers, createStore } from "redux";
import reducer from './logTimeReducer/reducer'
const rootReducer = combineReducers({
 reducer,
 

});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());