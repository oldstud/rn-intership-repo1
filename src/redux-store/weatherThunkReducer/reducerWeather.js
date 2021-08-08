import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as actionsWeather from './actionsWeather'


export const reducerWeather = createReducer([],{
[actionsWeather.fetchWeatherSuccess]:(_, action)=>action.payload,
})

export const isLoading = createReducer(false,{
    [actionsWeather.fetchWeatherRequest]:()=> true,
    [actionsWeather.fetchWeatherSuccess]:()=>false,
    [actionsWeather.fetchWeatherError]:()=>false,
})

export const error = createReducer(null,{
    [actionsWeather.fetchWeatherError]:(_,action)=>action.payload,
    [actionsWeather.fetchWeatherRequest]:()=> null,
})

export default combineReducers({
    reducerWeather,
    isLoading,
    error
})



