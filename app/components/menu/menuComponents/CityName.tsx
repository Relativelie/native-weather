import { FC } from "react";
import { Text, View } from "react-native";

import { menuSt } from '../menuStyles';
import { useTypedSelector } from "../../../hooks/useTypedSelector";


const CityName: FC = () => {
    const { cityInputText } = useTypedSelector(state => state.menu);


    return (
        <View>
            <Text style={menuSt.cityText}>{cityInputText}</Text>
        </View>
    );
}


export default CityName;
