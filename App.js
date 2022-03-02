import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Menu from './components/Menu';
import { REACT_APP_API_KEY_WEATHER, REACT_APP_API_ENDPOINT_WEATHER } from '@env'
import Weather from './components/Weather';

const App = () => {
  const [cityInputText, setCityInputText] = useState("Омск");
  const [selectedCity, setSelectedCity] = useState("Омск");
  const [isCelsius, setIsCelsius] = useState(true);
  const [weatherData, setWeatherData] = useState([])
  const [isLoading, setLoading] = useState([])


  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  const getWeather = async () => {
    const url = REACT_APP_API_ENDPOINT_WEATHER;
    const key = REACT_APP_API_KEY_WEATHER;
    const response = await fetch(`${url}weather?q=${selectedCity}&lang=ru&units=metric&appID=${key}`);
    const result = await response.json();

    if (result.cod === "404") {
      setWeatherData(["Пожалуйста, введите корректное наименование города"])
    }

    else if (result.cod === "401") {
      setWeatherData([`Доступ ограничен, обратитесь в службу тех.поддержки (error: ${result.cod})`])
    }

    else if (result.cod === "429") {
      setWeatherData([`Повторите запрос позднее или обратитесь в службу тех.поддержки(error: ${result.cod})`])
    }

    else if (["500", "502", "503", "504"].indexOf(result.cod) != -1) {
      setWeatherData([`Пожалуйста, обратитесь в службу тех.поддержки (error: ${result.cod})`])
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

  // entering text in the city input field
  const onChangeInputText = (e) => {
    setCityInputText(e)
  }

  // another city selected to show the weather
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
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#10BCD4" translucent={true} />
      <Menu city={cityInputText} onChangeInputText={onChangeInputText}
        changeTempState={changeTempState} isCelsius={isCelsius} changeSelectedCity={changeSelectedCity} />
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
