import { ADD_CITY } from "../constants";
import { REFRESH_WEATHER } from "../constants";

export const addCityAction = (city) => {
    return{
        type: ADD_CITY,
        payload: city,
    }
}
export const refreshWeatherAction = (weather) => {
    return{
        type: REFRESH_WEATHER,
        payload: weather,
    }
}