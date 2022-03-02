import { View, Text, Image, StyleSheet, ImageBackground } from "react-native"

const Weather = (props) => {



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

    const convertTempValue = (value) => {
        let temp = props.isCelsius ? Math.round(value) : Math.round(value * 9 / 5 + 32);
        return temp
    }


    return (
        <View style={styles.weatherContainer}>
            <View style={styles.temp}>
                <View style={styles.tempElem}>
                    <View style={{ width: 110, height: 130 }}>
                        <ImageBackground style={styles.descriptionImage} source={{ uri: props.data.icon }} />
                    </View>
                    <Text style={styles.tempText}>{convertTempValue(props.data.temp)}°</Text>
                </View>

                <View>
                    <Text>{ props.data.description }</Text>
                </View>

            </View>
            <View style={styles.otherValues}>
                <View style={styles.r}>
                    <Text>Ветер</Text>
                    <Text>{props.data.windSpeed}м/с, {convertWindValue(props.data.windDeg)}</Text>
                </View>
                <View>
                    <Text>Влажность</Text>
                    <Text>{props.data.humidity}%</Text>
                </View>
                <View>
                    <Text>Давление</Text>
                    <Text>{(props.data.pressure * 0.75).toFixed(0)} мм рт.ст</Text>
                </View>
                <View>
                    <Text>Вероятность дождя</Text>
                    <Text>{props.data.rain}%</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    weatherContainer: {
        flex: 5
    },

    temp: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },

    tempElem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    tempText: {
        fontSize: 60
    },

    descriptionImage: {

        flex: 1
    },

    otherValues: {
        // flex: 1,justifyContent: "center"
    }
})

export default Weather;

