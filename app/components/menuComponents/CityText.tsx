import { FC } from "react";
import { Text, View } from "react-native";

import { menuSt } from '../../stylesheets/styles';
import { useTypedSelector } from "../hooks/useTypedSelector";


const CityText: FC = () => {
    const { cityInputText} = useTypedSelector(state => state.menu);


    return (
        <View>
            <Text style={menuSt.cityText}>{cityInputText}</Text>
        </View>
    );
}


export default CityText;
