import { FC } from "react";
import { View, Text, ImageBackground } from "react-native";

import { weatherSt } from '../weatherStyles';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { WeatherDisplayDetails } from "./WeatherDisplayDetails";
import { usedTextsWeather } from "../../../usedTexts/usedTextsWeather";



const WeatherDisplay: FC = () => {

    const { weatherData } = useTypedSelector(state => state.weather);
    const { isCelsius } = useTypedSelector(state => state.menu);

    // Convert to wind direction.
    const convertWindValue = (value: number): string => {
        if (!isNaN(value)) {
            const windDirections: string[] = usedTextsWeather.windDirections;

            // Limit wind direction to 360 degrees.
            let intValue = Math.floor(value / 360);
            let floatValue = value % 360;

            // Matching up with the wind array.
            let directionIndex = Math.round(floatValue / 45) + intValue;
            return windDirections[directionIndex - 1];
        }
    };

    const convertTempValue = (value: number): string => {
        let temp = isCelsius ? `${Math.round(value)}°` : `${Math.round(value * 9 / 5 + 32)}°`;
        return temp;
    };


    return (

        <View style={weatherSt.weatherContainer} >

            <View style={weatherSt.temp}>
                <View style={weatherSt.tempElem}>
                    <View style={weatherSt.imgContainer}>
                        <ImageBackground style={weatherSt.descriptionImage} source={{ uri: weatherData[0].icon }} />
                    </View>
                    <Text style={weatherSt.tempText}>{convertTempValue(weatherData[0].temp)}</Text>
                </View>

                <View style={weatherSt.description}>
                    <Text style={weatherSt.descriptionText}>{weatherData[0].description}</Text>
                </View>
            </View>

            <View style={weatherSt.otherValues}>

                <View style={weatherSt.otherValuesElem}>
                    <WeatherDisplayDetails
                        typeOfWeather={usedTextsWeather.typeOfWeather.wind}
                        mainValue={weatherData[0].windSpeed}
                        clarificationValue={convertWindValue(weatherData[0].windDeg)}
                    />
                    <WeatherDisplayDetails
                        typeOfWeather={usedTextsWeather.typeOfWeather.humidity}
                        mainValue={weatherData[0].humidity}
                        clarificationValue={null} />
                </View>

                <View style={weatherSt.otherValuesElem}>
                    <WeatherDisplayDetails
                        typeOfWeather={usedTextsWeather.typeOfWeather.pressure}
                        mainValue={parseInt((weatherData[0].pressure * 0.75).toFixed(0))}
                        clarificationValue={null} />
                    <WeatherDisplayDetails
                        typeOfWeather={usedTextsWeather.typeOfWeather.rain}
                        mainValue={weatherData[0].rain}
                        clarificationValue={null} />
                </View>

            </View>
        </View>
    );
}


export default WeatherDisplay;