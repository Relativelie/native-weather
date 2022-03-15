export interface weatherState {
    weatherData: Array<string> | Array<any>
}

export enum WeatherActionTypes {
    GET_DATA = "GET_DATA"
}

interface GetDataAction {
    type: WeatherActionTypes.GET_DATA,
    payload: Array<string> | Array<any> | string | object
}


export type WeatherAction =
    GetDataAction