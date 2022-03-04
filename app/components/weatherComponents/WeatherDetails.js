import { View, Text } from "react-native";
import { generalSt, weatherSt } from '../../stylesheets/styles';


export const WeatherDetails = ({typeOfWeather, mainValue, clarificationValue}) => {

    
    return (
        <View>
        <Text style={generalSt.title}>{typeOfWeather[0]}</Text>
        <Text style={weatherSt.descriptionText}>
            <Text style={weatherSt.descriptionTextBold}>{mainValue} </Text>
            {typeOfWeather[1]}{clarificationValue != null && `, ${clarificationValue}`}
        </Text>
    </View>
    )
}