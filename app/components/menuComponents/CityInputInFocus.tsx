import { FC } from "react";
import { TextInput, View, TouchableOpacity, Text, Keyboard } from "react-native";
import { menuSt } from '../../stylesheets/styles';
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";



const CityInputInFocus:FC = () => {
    const { isCelsius, cityInputText, selectedCity, isInputFocus } = useTypedSelector(state => state.menu);
const { textInputAction, selectingCity, inputOnFocus } = useActions()

const selectAnotherCity = () => {
    console.log("input text:", cityInputText, "selected city:", selectedCity)
    selectingCity();
    Keyboard.dismiss();
    console.log("input text:", cityInputText, "selected city:", selectedCity)
    inputOnFocus(false)
}


    return (
        <View style={[menuSt.general, menuSt.focusedInput]}>
            <TextInput
                style={menuSt.inputElemInFocus}
                autoFocus={true}
                onChangeText={(e) => textInputAction(e)}
                value={cityInputText}
                placeholder={"Город"}
                onEndEditing={() => selectAnotherCity()}
                maxLength={22}
            />
            <TouchableOpacity
                onPress={() => selectAnotherCity()}
                // underlayColor='#fff'
                >
                <Text style={menuSt.cityInEditingBtn}>ОК</Text>
            </TouchableOpacity>
        </View>
    )

}


export default CityInputInFocus;