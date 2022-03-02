import { useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import SwitchElem from './menuComponents/SwitchElem';


const Menu = (props) => {

  const inputInFocus = useRef();

  // input is in focus when pressing on "change city"
  const inputFocus = () => {
    inputInFocus.current.focus();
  }




  return (
    <View style={styles.menuContainer}>
      <View style={styles.cityAndSwitch}>
        <TextInput
          style={styles.inputElem}
          ref={inputInFocus}
          onChangeText={(e) => props.onChangeInputText(e)}
          value={props.city}
          onEndEditing={() => props.changeSelectedCity()}
        />
        <SwitchElem style={styles.switchElem} changeTempState={props.changeTempState} isCelsius={props.isCelsius} />
      </View>

      <View style={styles.buttons}>
        <Text onPress={() => inputFocus()}>Сменить город</Text>
        <View style={styles.location}>
          <Image source={require('../assets/location.webp')} />
          <Text onPress={() => props.getLocation()}>Мое местоположение</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: .6
  },
  cityAndSwitch: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  inputElem: {
    fontSize: 25
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  location: {
    flexDirection: "row"
  }
});

export default Menu;
