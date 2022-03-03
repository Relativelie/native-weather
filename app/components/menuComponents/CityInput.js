import { TextInput } from "react-native";
import { menuSt } from '../../stylesheets/styles';


const CityInput = ({ inputInFocus, onChangeInputText, changeSelectedCity, city }) => {


    return (
        <TextInput
            style={menuSt.inputElem}
            ref={inputInFocus}
            onChangeText={(e) => onChangeInputText(e)}
            value={city}
            placeholder={"Город"}
            selectTextOnFocus={true}
            onEndEditing={() => changeSelectedCity()}
            maxLength={15}
        />
    )
}


export default CityInput;