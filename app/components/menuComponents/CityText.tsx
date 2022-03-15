import { Text, View } from "react-native";
import { menuSt } from '../../stylesheets/styles';


const CityText = ( city ) => {

    return (
        <View>
            <Text style={menuSt.cityText}>{city}</Text>
        </View>
    );
}


export default CityText;