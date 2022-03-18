import { FC } from "react";
import { View, Text, Image } from "react-native";

import { menuSt } from '../menuStyles';
import { generalSt } from '../../mixinsStyles';
import { getLocation } from "../../../requests/getLocation";
import { useActions } from "../../../hooks/useActions";
import { usedTextsMenu } from "../../../usedTexts/usedTextsMenu";


const MenuOptions: FC = () => {
    const { inputOnFocus, locate, loading, bringLocationError } = useActions();

    const location = async () => {
        //Show loading display while get location.
        loading(true);
        // Get location info.
        let cityName = await getLocation();
        loading(false);

        if (cityName.city !== false) {
            locate(cityName.city);
            bringLocationError(false);
        }
        else {
            bringLocationError(true);
        }
    };


    return (
        <View style={[menuSt.buttons, menuSt.general]}>
            <Text style={generalSt.title} onPress={() => inputOnFocus(true)}>{usedTextsMenu.optionsChangeCity}</Text>
            <View style={menuSt.location}>
                <Image source={require('../../../../assets/location.webp')} />
                <Text style={generalSt.title} onPress={() => location()}>{usedTextsMenu.optionsLocation}</Text>
            </View>
        </View>
    );
}


export default MenuOptions;