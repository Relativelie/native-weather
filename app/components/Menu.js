import { View } from 'react-native';

import { menuSt } from '../stylesheets/styles';
import SwitchElem from './menuComponents/SwitchElem';
import MenuButtons from './menuComponents/MenuButtons';
import CityText from './menuComponents/CityText';
import CityInputInFocus from './menuComponents/CityInputInFocus';


const Menu = (props) => {


  // Input is in focus when pressing on "change city".
  const inputFocus = () => {
    props.inputFieldOnFocus();
  };
  

  if (!props.isInputFocus) {
    return (
      <View style={[menuSt.container, menuSt.containerPad]}>
        <View style={[menuSt.cityAndSwitch, menuSt.general]}>

          <CityText
            style={menuSt.inputOutOfFocus}
            city={props.city}
          />

          <SwitchElem
            changeTempState={props.changeTempState}
            isCelsius={props.isCelsius}
          />

        </View>

        <MenuButtons
          inputFocus={inputFocus}
          location={props.location}
        />
      </View>
    );
  }

  else {
    return (
      <View style={[menuSt.container, menuSt.containerPadInput]}>
        <View style={[menuSt.cityInEditing, menuSt.general]}>

          <CityInputInFocus
            city={props.city}
            onChangeInputText={props.onChangeInputText}
            changeSelectedCity={props.changeSelectedCity}
          />

        </View>
      </View>
    );
  };
}


export default Menu;