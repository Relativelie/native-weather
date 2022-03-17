import { FC } from "react";
import { useEffect, useState } from "react";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { usedTextsWeather } from "../usedTexts/usedTextsWeather";
import ServiceAnnouncement from "./weatherComponents/ServiceAnnouncement";
import WeatherDisplay from "./weatherComponents/WeatherDisplay";


const Weather:FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { weatherData, locationError } = useTypedSelector(state => state.weather);
    const { selectedCity } = useTypedSelector(state => state.menu);
    const { getWeatherData } = useActions();


    useEffect(() => {
        getWeatherData(selectedCity);
    }, [selectedCity])


    // Loading value from api.
    useEffect(() => {
        if ((Array.isArray(weatherData) && weatherData.length === 0) || Object.keys(weatherData).length === 0) {
            setIsLoading(true);
        }  
        else setIsLoading(false);
    });


    // Displayed components.
    const displayedValue = () => {
        if (isLoading) return <ServiceAnnouncement text={usedTextsWeather.loading}/>;
        else if (locationError) return <ServiceAnnouncement text={usedTextsWeather.locationPermissionError}/>;
        else {
            if (typeof weatherData[0] === "string") {
                return <ServiceAnnouncement text={`${weatherData[0]} ${weatherData[1]}`}/>
            }
            else return (
                <WeatherDisplay/>
            );
        };
    };


    return displayedValue();
}


export default Weather;

