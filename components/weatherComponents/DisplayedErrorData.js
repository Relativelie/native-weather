import { View, Text } from "react-native";
import { generalSt } from '../../stylesheets/styles';


const DisplayedErrorData = ({data}) => {

    return (
        <View>
            <Text style={generalSt.serviceAnnouncement}>{data[0]}</Text>
        </View>
    )
}


export default DisplayedErrorData;