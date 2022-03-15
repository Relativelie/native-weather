import { FC } from "react";
import { View, Text } from "react-native"
import { generalSt } from '../../stylesheets/styles';


const LoadingProcess:FC = () => {

    return (
        <View>
            <Text style={generalSt.serviceAnnouncement}>Loading...</Text>
        </View>
    );
}


export default LoadingProcess;