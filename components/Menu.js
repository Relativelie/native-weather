import { useRef } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import SwitchElem from './menuComponents/SwitchElem';
import { menuSt, generalSt } from '../stylesheets/styles';


const Menu = (props) => {

  const inputInFocus = useRef();

  // input is in focus when pressing on "change city"
  const inputFocus = () => {

    inputInFocus.current.focus();
  }


  return (
    <View>
      <View style={menuSt.cityAndSwitch}>
          <TextInput
            style={menuSt.inputElem}
            ref={inputInFocus}
            onChangeText={(e) => props.onChangeInputText(e)}
            value={props.city}
            placeholder={"Город"}
            selectTextOnFocus={true}
            onEndEditing={() => props.changeSelectedCity()}
            maxLength = {15}
          />


        <SwitchElem changeTempState={props.changeTempState} isCelsius={props.isCelsius} />
      </View>

      <View style={menuSt.buttons}>
        <Text style={generalSt.title} onPress={() => inputFocus()}>Сменить город</Text>
        <View style={menuSt.location}>
          <Image source={require('../assets/location.webp')} />
          <Text style={generalSt.title} onPress={() => props.getLocation()}>Мое местоположение</Text>
        </View>
      </View>

    </View>
  );
}

export default Menu;
