import { useState, useEffect } from 'react';
import { View, StatusBar, Keyboard } from 'react-native';
import AppLoading from 'expo-app-loading';

import { appStyles } from './app/stylesheets/styles';
import fonts from './app/components/hooks/useFonts';
import Menu from './app/components/Menu';
import Weather from './app/components/Weather';
import { errorTexts } from './app/components/weatherComponents/openWeatherApiErrors';
import { getWeather } from './app/requests/getWeather';
import { getLocation } from './app/requests/getLocation';
import LoadingProcess from './app/components/weatherComponents/LoadingProcess';

import { useTypedSelector } from './app/components/hooks/useTypedSelector';
import { Provider } from 'react-redux';
import { storeT } from './app/store/index';
import { configureStore, createStore } from '@reduxjs/toolkit';
import { rootReducer } from './app/store/reducers';
import { menuReducer } from './app/store/reducers/menuReducer';




const App = () => {

  const { isCelsius, cityInputText, selectedCity, isInputFocus, isLoading } = useTypedSelector(state => state.menu);
  // const [cityInputText, setCityInputText] = useState("Омск");
  // const [selectedCity, setSelectedCity] = useState("Омск");
  // const [isCelsius, setIsCelsius] = useState(true);
  // const [weatherData, setWeatherData] = useState([]);
  // const [IsFontReady, SetIsFontReady] = useState(false);
  // const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  // const [isInputFocus, setIsInputFocus] = useState(false);


  // useEffect(() => {
  //   getWeatherData();
  // }, [selectedCity]);


  // const getWeatherData = async () => {
  //   const result = await getWeather(selectedCity);

  //   if (errorTexts[result.cod]) {
  //     setWeatherData([errorTexts[result.cod]]);
  //   }

  //   else {
  //     setWeatherData({
  //       temp: result.main.temp,
  //       icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
  //       description: result.weather[0]?.description[0].toUpperCase() +
  //         result.weather[0]?.description.substring(1, result.weather[0]?.description.length),
  //       windSpeed: result.wind.speed,
  //       windDeg: result.wind.deg,
  //       pressure: result.main.pressure,
  //       humidity: result.main.humidity,
  //       rain: result.clouds.all
  //     });
  //   };
  // }

  // // Get fonts.
  // if (!IsFontReady) {
  //   return (
  //     <AppLoading
  //       startAsync={fonts}
  //       onFinish={() => SetIsFontReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // };

  // const location = async () => {
  //   //Show loading display while get location.
  //   setIsLoadingLocation(true)

  //   // Get location info.
  //   let cityName = await getLocation();
  //   setIsLoadingLocation(false);
  //   if (!cityName?.error) {
  //     setCityInputText(cityName.city);
  //     setSelectedCity(cityName.city);
  //   };
  // }

  // // Entering text in the city input field.
  // const onChangeInputText = (e) => {
  //   setCityInputText(e);
  // };

  // // Selected new city.
  // const changeSelectedCity = () => {
  //   if (cityInputText !== selectedCity && cityInputText !== "") {
  //     setSelectedCity(cityInputText);
  //   }

  //   else if (cityInputText === "") {
  //     setCityInputText(selectedCity);
  //   };

  //   Keyboard.dismiss();
  //   setIsInputFocus(false);
  // };

  // // Switch type of temp.
  // const changeTempState = () => {
  //   setIsCelsius(!isCelsius);
  // };

  // const inputFieldOnFocus = () => {
  //   setIsInputFocus(true);
  // };



  return (
    // <Provider store={store}>
<Provider store={storeT}>
    <View>

      {/* <View style={appStyles.container} onStartShouldSetResponder={() => changeSelectedCity()}>
      <View style={appStyles.container}>

        <StatusBar
          hidden={false}
          backgroundColor="#7290B9"
          barStyle={"light-content"}
          translucent={true}
        />
        <Menu /> */}

        <View style={appStyles.weatherValuesContainer}>
          {isLoading ? <LoadingProcess /> :
            <Weather />
          }
        </View>

      {/* </View> */}
    </View>
    </Provider>
  );
};

// export default App;
