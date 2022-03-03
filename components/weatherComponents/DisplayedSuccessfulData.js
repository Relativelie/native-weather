import { View, Text, ImageBackground } from "react-native";
import { weatherSt, generalSt } from '../../stylesheets/styles';


const DisplayedSuccessfulData = (props) => {

    // convert to wind direction
    const convertWindValue = (value) => {
        if (!isNaN(value)) {
            const windtDerictions = ["северный", "северо-восточный", "восточный", "юго-восточный", "южный",
                "юго-западный", "западный", "северо-западный", "северный"];

            // limit wind direction to 360 degrees
            let intValue = Math.floor(value / 360);
            let floatValue = value % 360;

            // matching up with the wind array
            let directionIndex = Math.round(floatValue / 45) + intValue;
            return windtDerictions[directionIndex - 1]
        }
    }

    // convert temp to fahrenheit
    const convertTempValue = (value) => {
        let temp = props.isCelsius ? `${Math.round(value)}°` : `${Math.round(value * 9 / 5 + 32)}F`;
        return temp
    }


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
                    <View>
                        <Text style={generalSt.title}>Ветер</Text>
                        <Text style={weatherSt.descriptionText}>
                            <Text style={weatherSt.descriptionTextBold}>{props.data.windSpeed} </Text>
                            м/с, {convertWindValue(props.data.windDeg)}
                        </Text>
                    </View>
                    <View>
                        <Text style={generalSt.title}>Влажность</Text>
                        <Text style={weatherSt.descriptionText}>
                            <Text style={weatherSt.descriptionTextBold}>{props.data.humidity} </Text>
                            %
                        </Text>
                    </View>
                </View>

                <View style={weatherSt.otherValuesElem}>
                    <View>
                        <Text style={generalSt.title}>Давление</Text>
                        <Text style={weatherSt.descriptionText}>
                            <Text style={weatherSt.descriptionTextBold}>{(props.data.pressure * 0.75).toFixed(0)} </Text>
                            мм рт.ст
                        </Text>
                    </View>
                    <View>
                        <Text style={generalSt.title}>Вероятность дождя</Text>
                        <Text style={weatherSt.descriptionText}>
                            <Text style={weatherSt.descriptionTextBold}>{props.data.rain} </Text>
                            %
                        </Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default DisplayedSuccessfulData