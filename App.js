import { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Menu from './components/Menu';
import { REACT_APP_API_KEY_WEATHER, REACT_APP_API_ENDPOINT_WEATHER } from '@env'
import Weather from './components/Weather';
import * as Location from 'expo-location';
import { errorTexts } from './components/openWeatherApiErrors';



const App = () => {
  const [cityInputText, setCityInputText] = useState("Омск");
  const [selectedCity, setSelectedCity] = useState("Омск");
  const [isCelsius, setIsCelsius] = useState(true);
  const [weatherData, setWeatherData] = useState([]);
  const [locationLoading, setLocationLoading] = useState(false);


  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  const getWeather = async () => {
    const url = REACT_APP_API_ENDPOINT_WEATHER;
    const key = REACT_APP_API_KEY_WEATHER;
    const response = await fetch(`${url}weather?q=${selectedCity}&lang=ru&units=metric&appID=${key}`);
    const result = await response.json();

    if (result.cod === "404") {
      setWeatherData([errorTexts[404]])
    }

    else if (result.cod === "401") {
      setWeatherData([errorTexts[401] + result.cod])
    }

    else if (result.cod === "429") {
      setWeatherData([errorTexts[429] + result.cod])
    }

    else if (["500", "502", "503", "504"].indexOf(result.cod) != -1) {
      setWeatherData([errorTexts[500] + result.cod])
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
  };


  const getLocation = async () => {

    //show loading display while get location
    setWeatherData([])

    // get latitude and longitude
    let locationData = await Location.getCurrentPositionAsync({});

    // get city
    let regionName = await Location.reverseGeocodeAsync({
      latitude: locationData.coords.latitude,
      longitude: locationData.coords.longitude,
    });

    setCityInputText(regionName[0].city)
    setSelectedCity(regionName[0].city)
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
  }

  // switch type of temp
  const changeTempState = () => {
    setIsCelsius(!isCelsius);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#6592be" />
      <Menu city={cityInputText} onChangeInputText={onChangeInputText}
        changeTempState={changeTempState} isCelsius={isCelsius}
        changeSelectedCity={changeSelectedCity} getLocation={getLocation} />
      <Weather data={weatherData} isCelsius={isCelsius} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6592be'
  },
});
