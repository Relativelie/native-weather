import { useRef } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Image } from 'react-native';
import SwitchElem from './SwitchElem';


const Menu = (props) => {
  const lastNameRef = useRef();
  console.log(props)


  const inputFocus = () => {
    lastNameRef.current.focus();
  }



  return (
    <View style={styles.menuContainer}>
      <View style={styles.cityAndSwitch}>
        <TextInput
          style={styles.inputElem}
          ref={lastNameRef}
          onChangeText={(e) => props.onChangeCity(e)}
          value={props.city}
          onEndEditing={() => props.changes()}
        />
        <SwitchElem style={styles.switchElem} changeTempState={props.changeTempState} isCelsius={props.isCelsius}/>
      </View>

      <View style={ styles.buttons }>
        <Text onPress={() => inputFocus()}>Сменить город</Text>
        <View style={ styles.location }>
          <Image source = { require('../assets/location.webp') }/>
          <Text>Мое местоположение</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: .6,
    paddingTop: 30
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
