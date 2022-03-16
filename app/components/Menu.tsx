import { View } from 'react-native';

import { menuSt } from '../stylesheets/styles';
import SwitchElem from './menuComponents/SwitchElem';
import MenuButtons from './menuComponents/MenuButtons';
import CityText from './menuComponents/CityText';
import CityInputInFocus from './menuComponents/CityInputInFocus';
import { useTypedSelector } from './hooks/useTypedSelector';
import { FC } from 'react';


interface Props {
  selectAnotherCity: any
}


const Menu: FC<Props> = ({selectAnotherCity}) => {

  const { cityInputText, isInputFocus } = useTypedSelector(state => state.menu);
  


  if (!isInputFocus) {
    return (
      <View style={[menuSt.container, menuSt.containerPad]}>
        <View style={[menuSt.cityAndSwitch, menuSt.general]}>


          <CityText
            a={cityInputText}
          />
        </View>

        <SwitchElem/>

        <MenuButtons />
      </View>
    );
  }

  else {
    return (
      <View style={[menuSt.container, menuSt.containerPadInput]}>
        <View style={[menuSt.cityInEditing, menuSt.general]}>

          <CityInputInFocus selectAnotherCity={selectAnotherCity}/>

        </View>
      </View>
    );
  };
}


export default Menu;