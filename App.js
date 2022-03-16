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



const App = () => {

      const [IsFontReady, SetIsFontReady] = useState(false);

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


            <View style={appStyles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor="#7290B9"
                    barStyle={"light-content"}
                    translucent={true} />
                <Menu />
                <View style={appStyles.weatherValuesContainer}>

                    <Weather />
                </View>
            </View>
        </Provider>

    )
}

export default App