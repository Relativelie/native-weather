export interface weatherState {
    weatherData:  Array<any> | object,
    locationError: boolean
}

export enum WeatherActionTypes {
    GET_DATA = "GET_DATA", 
    BRING_LOCATION_ERROR = "BRING_LOCATION_ERROR"
}

interface GetDataAction {
    type: WeatherActionTypes.GET_DATA,
    payload: Array<any> | object
}

interface BringLocationError {
    type: WeatherActionTypes.BRING_LOCATION_ERROR,
    payload: boolean
}

export type WeatherAction =
    GetDataAction
    | BringLocationError