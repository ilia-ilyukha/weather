import { ADD_CITY } from '../constants';
import { REFRESH_WEATHER } from '../constants';

const initialState = {
    // cities: ["Kharkiv", "Kyiv", "Uman"]
    cities: [
        {
            main: {
                temp: 24.13,
                temp_max: 24.13,
                temp_min: 24.13,
            },
            name: "Kharkiv",
            weather: { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
            wind: { speed: 3.65, deg: 192.183 },
        },
    ]
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            let newCities = state.cities;
            newCities = state.cities.concat(action.payload);
            return {
                ...state,
                cities: newCities,

            }
        case REFRESH_WEATHER:
            let newWeather = state.cities;
            newWeather[action.payload.id] = action.payload.weather;
            return {
                ...state,
                cities: newWeather,
            }
        default:
            return state;
    }
}