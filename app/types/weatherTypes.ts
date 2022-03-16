export interface weatherState {
    weatherData:  Array<any> | object
}

export enum WeatherActionTypes {
    GET_DATA = "GET_DATA"
}

interface GetDataAction {
    type: WeatherActionTypes.GET_DATA,
    payload: Array<any> | object
}


export type WeatherAction =
    GetDataAction