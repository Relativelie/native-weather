import { View, Text, Image } from "react-native";
import { generalSt, menuSt } from '../../stylesheets/styles';


const MenuButtons = ({ inputFocus, location }) => {


    return (
        <View style={menuSt.buttons}>
            <Text style={generalSt.title} onPress={() => inputFocus()}>Сменить город</Text>
            <View style={menuSt.location}>
                <Image source={require('../../../assets/location.webp')} />
                <Text style={generalSt.title} onPress={() => location()}>Мое местоположение</Text>
            </View>
        </View>
    )
}


export default MenuButtons;