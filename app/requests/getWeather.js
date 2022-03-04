
import { REACT_APP_API_KEY_WEATHER, REACT_APP_API_ENDPOINT_WEATHER } from '@env';

export const getWeather = async (selectedCity ) => {
    
    const url = REACT_APP_API_ENDPOINT_WEATHER;
    const key = REACT_APP_API_KEY_WEATHER;
    const response = await fetch(`${url}weather?q=${selectedCity}&lang=ru&units=metric&appID=${key}`);
    const result = await response.json();
    
    return result

};