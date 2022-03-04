import { View, Text, ImageBackground } from "react-native";

import { weatherSt } from '../../stylesheets/styles';
import { WeatherDetails } from "./WeatherDetails";


const DisplayedSuccessfulData = (props) => {

    // Convert to wind direction.
    const convertWindValue = (value) => {
        if (!isNaN(value)) {
            const windtDerictions = [
                "северный", "северо-восточный", "восточный", "юго-восточный", "южный",
                "юго-западный", "западный", "северо-западный", "северный"
            ];

            // Limit wind direction to 360 degrees.
            let intValue = Math.floor(value / 360);
            let floatValue = value % 360;

            // Matching up with the wind array.
            let directionIndex = Math.round(floatValue / 45) + intValue;
            return windtDerictions[directionIndex - 1];
        }
    };

    const convertTempValue = (value) => {
        let temp = props.isCelsius ? `${Math.round(value)}°` : `${Math.round(value * 9 / 5 + 32)}°`;
        return temp;
    };


    return (

        <View style={weatherSt.weatherContainer} >

            <View style={weatherSt.temp}>
                <View style={weatherSt.tempElem}>
                    <View style={weatherSt.imgContainer}>
                        <ImageBackground style={weatherSt.descriptionImage} source={{ uri: props.data.icon }} />
                    </View>
                    <Text style={weatherSt.tempText}>{convertTempValue(props.data.temp)}</Text>
                </View>

                <View style={weatherSt.description}>
                    <Text style={weatherSt.descriptionText}>{props.data.description}</Text>
                </View>
            </View>

            <View style={weatherSt.otherValues}>

                <View style={weatherSt.otherValuesElem}>
                    <WeatherDetails
                        typeOfWeather={["Ветер", "м/с"]}
                        mainValue={props.data.windSpeed}
                        clarificationValue={convertWindValue(props.data.windDeg)}
                    />
                    <WeatherDetails
                        typeOfWeather={["Влажность", "%"]}
                        mainValue={props.data.humidity}
                        clarificationValue={null} />
                </View>

                <View style={weatherSt.otherValuesElem}>
                    <WeatherDetails
                        typeOfWeather={["Давление", "мм рт.ст"]}
                        mainValue={(props.data.pressure * 0.75).toFixed(0)}
                        clarificationValue={null} />
                    <WeatherDetails
                        typeOfWeather={["Вероятность дождя", "%"]}
                        mainValue={props.data.rain}
                        clarificationValue={null} />
                </View>

            </View>
        </View>
    );
}


export default DisplayedSuccessfulData;