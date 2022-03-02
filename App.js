import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Menu from './components/Menu';
import { REACT_APP_API_KEY_WEATHER, REACT_APP_API_ENDPOINT_WEATHER } from '@env'
import Weather from './components/Weather';

const App = () => {
  const [city, setCity] = useState("Омск");
  const [isCityChanged, setIsCityChaged] = useState("Омск");
  const [isCelsius, setIsCelsius] = useState(false);
  const [weatherData, setWeatherData] = useState([])


  useEffect(() => {
    getWeather()
    console.log("xdcfvgbhnjkl")
  }, [isCityChanged]);

  const getWeather = async () => {
    const url = REACT_APP_API_ENDPOINT_WEATHER;
    const key = REACT_APP_API_KEY_WEATHER;
    const response = await fetch(`${url}weather?q=${city}&lang=ru&units=metric&appID=${key}`);
    const result = await response.json();
    console.log("get")

    setWeatherData({
      temp: result.main.temp,
      icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
      description: result.weather[0].description,
      windSpeed: result.wind.speed,
      windDeg: result.wind.deg,
      pressure: result.main.pressure,
      humidity: result.main.humidity,
      rain: result.clouds.all
    })
  };

  const onChangeCity = (e) => {
    setCity(e)
  }

  const changes = () => {
    console.log("зашло")
    if (city !== isCityChanged) {
      setIsCityChaged(city);
      
    }
  }

  const changeTempState = () => {

    setIsCelsius(!isCelsius);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#10BCD4" translucent={true} />
      <Menu city={city} onChangeCity={onChangeCity}
        changeTempState={changeTempState} isCelsius={isCelsius} changes={changes} />
      <Weather data={weatherData} isCelsius={isCelsius} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
