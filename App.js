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



const App = () => {
  const [cityInputText, setCityInputText] = useState("Омск");
  const [selectedCity, setSelectedCity] = useState("Омск");
  const [isCelsius, setIsCelsius] = useState(true);
  const [weatherData, setWeatherData] = useState([]);
  const [IsReady, SetIsReady] = useState(false);


  useEffect(() => {
    getWeatherData();
  }, [selectedCity]);


  const getWeatherData = async () => {
    const result = await getWeather(selectedCity);

    if (errorTexts[result.cod]) {
      setWeatherData([errorTexts[result.cod]])
    }

    else {
      setWeatherData({
        temp: result.main.temp,
        icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
        description: result.weather[0]?.description[0].toUpperCase() +
          result.weather[0]?.description.substring(1, result.weather[0]?.description.length),
        windSpeed: result.wind.speed,
        windDeg: result.wind.deg,
        pressure: result.main.pressure,
        humidity: result.main.humidity,
        rain: result.clouds.all
      })
    }
  }

  // get fonts
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
        onError={console.warn}
      />
    );
  }

  const location = async () => {
    //show loading display while get location
    setWeatherData([])

    // get location info
    let cityName = await getLocation()

    setCityInputText(cityName)
    setSelectedCity(cityName)
  }

  // entering text in the city input field
  const onChangeInputText = (e) => {
    setCityInputText(e)
  }

  // selected new city
  const changeSelectedCity = () => {
    if (cityInputText !== selectedCity) {
      setSelectedCity(cityInputText);
    }
    Keyboard.dismiss();
  }

  // switch type of temp
  const changeTempState = () => {
    setIsCelsius(!isCelsius);
  }


  return (
    <View style={appStyles.container} onStartShouldSetResponder={() => changeSelectedCity()}>
      <StatusBar hidden={false} backgroundColor="#6592be" />
      <Menu city={cityInputText} onChangeInputText={onChangeInputText}
        changeTempState={changeTempState} isCelsius={isCelsius}
        changeSelectedCity={changeSelectedCity} location={location} />
      <Weather data={weatherData} isCelsius={isCelsius} />
    </View>
  );
}

export default App;
