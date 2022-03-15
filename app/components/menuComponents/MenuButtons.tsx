import { FC } from "react";
import { View, Text, Image, Button } from "react-native";
import { getLocation } from "../../requests/getLocation";
import { generalSt, menuSt } from '../../stylesheets/styles';
import { useActions } from "../hooks/useActions";

// type Props = {
//     onPress(): void
// }

const MenuButtons: FC = () => {

    const { inputOnFocus, locate, loading } = useActions();

    const location = async () => {
        //Show loading display while get location.
        loading();
        // Get location info.
        let cityName = await getLocation();
        loading();
        if (!cityName?.error) {
            locate(cityName.city);
        }

    }

    return (

        <View style={[menuSt.buttons, menuSt.general]}>
            <Text style={generalSt.title} onPress={() => inputOnFocus(true)}>Сменить город</Text>
            <View style={menuSt.location}>
                <Image source={require('../../../assets/location.webp')} />
                <Text style={generalSt.title} onPress={() => location()}>Мое местоположение</Text>
            </View>
        </View>
    );
}


export default MenuButtons;