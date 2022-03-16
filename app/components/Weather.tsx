import { FC } from "react";
import { useEffect, useState } from "react";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

import DisplayedErrorData from "./weatherComponents/DisplayedErrorData";
import DisplayedSuccessfulData from "./weatherComponents/DisplayedSuccessfulData";
import LoadingProcess from "./weatherComponents/LoadingProcess";


const Weather:FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { weatherData } = useTypedSelector(state => state.weather);
    const { selectedCity } = useTypedSelector(state => state.menu);
    const { getWeatherData, loading } = useActions();

    

    useEffect(() => {
        getWeatherData(selectedCity);
    }, [selectedCity])


    // Loading value from api.
    useEffect(() => {

        if ((Array.isArray(weatherData) && weatherData.length === 0) || Object.keys(weatherData).length === 0) {
            setIsLoading(true);
        }  
        else {
            setIsLoading(false);
        }
    });




    // Displayed components.
    const displayedValue = () => {

        if (isLoading) return <LoadingProcess />;

        else {
            if (typeof weatherData[0] === "string") {
                return <DisplayedErrorData />
            }
            else return (
                <DisplayedSuccessfulData/>
            );
        };
    };


    return displayedValue();
}


export default Weather;

