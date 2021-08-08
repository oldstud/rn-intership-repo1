import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers} from "redux";
import reducerLogs from './logTimeReducer/reducerLogs'
import reducerWeather from './weatherThunkReducer/reducerWeather'

// const rootReducer = combineReducers({
//  reducerLogs,
//  reducerWeather,
//  isLoading,
//  error


// });

export const store = configureStore({
        reducer:{
            logtime:reducerLogs,
            weather:reducerWeather
        }

    });