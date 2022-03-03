import { useRef } from 'react';
import { View } from 'react-native';

import { menuSt } from '../stylesheets/styles';
import SwitchElem from './menuComponents/SwitchElem';
import MenuButtons from './menuComponents/MenuButtons';
import CityInput from './menuComponents/CityInput';


const Menu = (props) => {

  const inputInFocus = useRef();

  // input is in focus when pressing on "change city"
  const inputFocus = () => {
    inputInFocus.current.focus();
  }


  return (
    <View>

      <View style={menuSt.cityAndSwitch}>
        <CityInput
          inputInFocus={inputInFocus}
          city={props.city}
          onChangeInputText={props.onChangeInputText}
          changeSelectedCity={props.changeSelectedCity} />

        <SwitchElem
          changeTempState={props.changeTempState}
          isCelsius={props.isCelsius} />
      </View>

      <MenuButtons
        inputFocus={inputFocus}
        location={props.location} />

    </View>
  );
}

export default Menu;
