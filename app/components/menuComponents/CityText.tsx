import { FC } from "react";
import { Text, View } from "react-native";
import { menuSt } from '../../stylesheets/styles';
import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
    a: string
}

const CityText: FC<Props> = ( {a} ) => {

    const {isCelsius, cityInputText, selectedCity, isInputFocus, isLoading} = useTypedSelector(state => state.menu)


    return (
        <View>
            <Text style={menuSt.cityText}>{a}</Text>
        </View>
    );
}


export default CityText;


{/* <Text style={menuSt.cityText}>{cityInputText}</Text> */}