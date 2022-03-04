import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { menuSt } from '../../stylesheets/styles';



const CityInputInFocus = ({ onChangeInputText, changeSelectedCity, city }) => {


    return (
        <View style={[menuSt.general, menuSt.focusedInput]}>
            <TextInput
                style={menuSt.inputElemInFocus}
                autoFocus={true}
                onChangeText={(e) => onChangeInputText(e)}
                value={city}
                placeholder={"Город"}
                onEndEditing={() => changeSelectedCity()}
                maxLength={22}
            />
            <TouchableOpacity
                onPress={() => changeSelectedCity()}
                underlayColor='#fff'>
                <Text style={menuSt.cityInEditingBtn}>ОК</Text>
            </TouchableOpacity>
        </View>
    )

}


export default CityInputInFocus;