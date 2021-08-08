import * as api from "../../api";
import * as actionsWeather from './actionsWeather'

export const fetchWeather = () => async dispatch =>{
    dispatch(actionsWeather.fetchWeatherRequest());
try {
    const weatherData = await api.fetchWeather();
    dispatch(actionsWeather.fetchWeatherSuccess(weatherData));
    // or const {data} = await axios.get("/posts/5");
} catch (error) {
    dispatch(actionsWeather.fetchWeatherError(error))
}
  
}