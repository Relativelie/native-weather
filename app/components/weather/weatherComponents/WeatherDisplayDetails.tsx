import { FC } from "react";
import { View, Text } from "react-native";

import { weatherSt } from '../weatherStyles';
import { generalSt } from '../../mixinsStyles';


interface Props {
    typeOfWeather: Array<string>,
    mainValue: number,
    clarificationValue: string | null
}

export const WeatherDisplayDetails:FC<Props> = ({typeOfWeather, mainValue, clarificationValue}) => {

    
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