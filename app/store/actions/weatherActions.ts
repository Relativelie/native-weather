import { Dispatch } from "react";

import { errorTexts } from "../../usedTexts/openWeatherApiErrors";
import { getWeather } from "../../requests/getWeather";
import { WeatherAction, WeatherActionTypes } from "../../types/weatherTypes";
import { useActions } from "../../hooks/useActions";
// import { loading } from "./menuActions";
import { useState } from "react";
import { MenuAction } from "../../types/menuTypes";

export const loading = (value: boolean):WeatherAction => ({
    type: WeatherActionTypes.LOADING,
    payload: value
})

export const getWeatherData = (city: string) => {
    return async (dispatch: Dispatch<WeatherAction | MenuAction>) => {
        dispatch(loading(true))

        const result = await getWeather(city);
        console.log(1)

        if (errorTexts[result.cod]) {
            dispatch({
                type: WeatherActionTypes.GET_DATA,
                payload: [errorTexts[result.cod], result.cod]
            })
        }
        else {
            dispatch({
                type: WeatherActionTypes.GET_DATA,
                payload: [{
                    temp: result.main.temp,
                    icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
                    description: result.weather[0]?.description[0].toUpperCase() +
                        result.weather[0]?.description.substring(1, result.weather[0]?.description.length),
                    windSpeed: result.wind.speed,
                    windDeg: result.wind.deg,
                    pressure: result.main.pressure,
                    humidity: result.main.humidity,
                    rain: result.clouds.all
                }]
            });
        };
        dispatch(loading(false))
        console.log(2)
    }
}

export const bringLocationError = (value: boolean):WeatherAction => ({
    type: WeatherActionTypes.BRING_LOCATION_ERROR,
    payload: value
})


