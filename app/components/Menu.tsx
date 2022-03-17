import { View } from 'react-native';
import { FC } from 'react';

import { menuSt } from '../stylesheets/styles';
import TempSwitch from './menuComponents/TempSwitch';
import MenuOptions from './menuComponents/MenuOptions';
import CityName from './menuComponents/CityName';
import InputField from './menuComponents/InputField';
import { useTypedSelector } from '../hooks/useTypedSelector';


interface Props {
  selectAnotherCity: Function
}


const Menu: FC<Props> = ({ selectAnotherCity }) => {
  const { isInputFocus } = useTypedSelector(state => state.menu);


  if (!isInputFocus) {
    return (
      <View style={[menuSt.container, menuSt.containerPad]}>
        <View style={[menuSt.cityAndSwitch, menuSt.general]}>
          <CityName />
          <TempSwitch />
        </View>
        <MenuOptions />
      </View>
    );
  }

  else {
    return (
      <View style={[menuSt.container, menuSt.containerPadInput]}>
        <View style={[menuSt.cityInEditing, menuSt.general]}>
          <InputField selectAnotherCity={selectAnotherCity} />
        </View>
      </View>
    );
  };
}


export default Menu;