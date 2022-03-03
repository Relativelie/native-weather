import { View, Text } from "react-native"
import { generalSt } from '../../stylesheets/styles';


const LoadingProcess = () => {

    return (
        <View>
            <Text style={generalSt.serviceAnnouncement}>Loading...</Text>
        </View>
    )
}


export default LoadingProcess;