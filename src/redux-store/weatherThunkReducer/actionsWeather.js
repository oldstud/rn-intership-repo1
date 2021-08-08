import { createAction } from "@reduxjs/toolkit"

export const fetchWeatherRequest = createAction('weather/fetchWeatherRequest');
export const fetchWeatherSuccess = createAction('weather/fetchWeatherSuccess');
export const fetchWeatherError = createAction('weather/fetchWeatherError');

