import { Dispatch } from "react";
import { errorTexts } from "../../components/weatherComponents/openWeatherApiErrors";
import { getWeather } from "../../requests/getWeather";
import { WeatherAction, WeatherActionTypes } from "../../types/weatherTypes";

export const getWeatherData = (city: string) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        const result = await getWeather(city);
        if (errorTexts[result.cod]) {
            dispatch({
                type: WeatherActionTypes.GET_DATA,
                payload: errorTexts[result.cod]
            })
        }
        else {
            dispatch({
                type: WeatherActionTypes.GET_DATA,
                payload: {
                    temp: result.main.temp,
                    icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
                    description: result.weather[0]?.description[0].toUpperCase() +
                        result.weather[0]?.description.substring(1, result.weather[0]?.description.length),
                    windSpeed: result.wind.speed,
                    windDeg: result.wind.deg,
                    pressure: result.main.pressure,
                    humidity: result.main.humidity,
                    rain: result.clouds.all
                }
            });
        };
    }
}



