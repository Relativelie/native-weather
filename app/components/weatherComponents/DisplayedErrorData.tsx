import { FC } from "react";
import { View, Text } from "react-native";
import { generalSt } from '../../stylesheets/styles';
import { useTypedSelector } from "../hooks/useTypedSelector";


const DisplayedErrorData:FC = () => {
    const { weatherData } = useTypedSelector(state => state.weather);


    return (
        <View>
            <Text style={generalSt.serviceAnnouncement}>{weatherData}</Text>
        </View>
    );
}


export default DisplayedErrorData;