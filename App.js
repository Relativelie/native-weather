import { Provider } from "react-redux";
import { useState } from "react";
import AppLoading from 'expo-app-loading';

import { store } from "./app/store";
import fonts from "./app/hooks/useFonts";
import MainComponent from "./app/components/MainComponent";


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
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
};


export default App