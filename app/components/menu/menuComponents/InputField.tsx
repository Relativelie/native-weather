import { FC } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";

import { menuSt } from '../menuStyles';
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { usedTextsMenu } from "../../../usedTexts/usedTextsMenu";


interface Props {
    selectAnotherCity: Function
}


const InputField: FC<Props> = ({ selectAnotherCity }) => {
    const { cityInputText } = useTypedSelector(state => state.menu);
    const { textInputAction } = useActions();


    return (
        <View style={[menuSt.general, menuSt.focusedInput]}>
            <TextInput
                style={menuSt.inputElemInFocus}
                autoFocus={true}
                onChangeText={(e) => textInputAction(e)}
                value={cityInputText}
                placeholder={usedTextsMenu.inputFieldPlaceholder}
                onEndEditing={() => selectAnotherCity()}
                maxLength={22}
            />
            <TouchableOpacity
                onPress={() => selectAnotherCity()}>
                <Text style={menuSt.cityInEditingBtn}>{usedTextsMenu.inputFieldBtn}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default InputField;