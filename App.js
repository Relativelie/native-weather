import { StatusBar, Text, View } from "react-native"
import { Provider, useSelector } from "react-redux"
import { useTypedSelector } from "./app/components/hooks/useTypedSelector"
import Menu from "./app/components/Menu"
import { storeT } from "./app/store"
import { appStyles } from "./app/stylesheets/styles"
import Weather from './app/components/Weather';
import { useState } from "react";
import AppLoading from 'expo-app-loading';
import fonts from "./app/components/hooks/useFonts"
import { useActions } from "./app/components/hooks/useActions"
import MainComponent from "./app/components/MainComponent"



const App = () => {

  const [IsFontReady, SetIsFontReady] = useState(false);
//   const { textInputAction, selectingCity, inputOnFocus } = useActions()



//   const selectAnotherCity = () => {
//     console.log("input text:", cityInputText, "selected city:", selectedCity)
//     selectingCity();
//     Keyboard.dismiss();
//     console.log("input text:", cityInputText, "selected city:", selectedCity)
//     inputOnFocus(false)
// }

  //   Get fonts.
  if (!IsFontReady) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => SetIsFontReady(true)}
        onError={console.warn}
      />
    );
  };

  return (
    <Provider store={storeT}>

<MainComponent/>
      {/* <View style={appStyles.container} onStartShouldSetResponder={() => selectAnotherCity()}>
        <StatusBar
          hidden={false}
          backgroundColor="#7290B9"
          barStyle={"light-content"}
          translucent={true} />
        <Menu />
        <View style={appStyles.weatherValuesContainer}>

          <Weather />
        </View>
      </View> */}
    </Provider>

  )
}

export default App