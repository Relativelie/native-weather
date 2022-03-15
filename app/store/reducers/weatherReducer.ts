import { weatherState, WeatherAction } from "../../types/weatherTypes";

const initialState: weatherState = {
    weatherData: []
}

export const weatherReducer = (state = initialState, action: WeatherAction): weatherState = {
    switch (action.type) {
        
    }
}