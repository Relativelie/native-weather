import { weatherState, WeatherAction, WeatherActionTypes } from "../../types/weatherTypes";

const initialState: weatherState = {
    weatherData: []
}


export const weatherReducer = (state = initialState, action: WeatherAction): weatherState => {
    switch (action.type) {
        case WeatherActionTypes.GET_DATA:
            return {
                ...state,
                weatherData: action.payload
            }
        default:
            return state
    }
}