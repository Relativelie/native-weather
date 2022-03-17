import { weatherState, WeatherAction, WeatherActionTypes } from "../../types/weatherTypes";

const initialState: weatherState = {
    weatherData: [],
    locationError: false
}


export const weatherReducer = (state = initialState, action: WeatherAction): weatherState => {
    switch (action.type) {
        case WeatherActionTypes.GET_DATA:
            return {
                ...state,
                weatherData: action.payload
            }

        case WeatherActionTypes.BRING_LOCATION_ERROR:
            return {
                ...state,
                locationError: action.payload
            }

        default:
            return state
    }
}