export interface weatherState {
    weatherData:  object,
    locationError: boolean,
    isLoading: boolean
}

export enum WeatherActionTypes {
    GET_DATA = "GET_DATA", 
    BRING_LOCATION_ERROR = "BRING_LOCATION_ERROR",
    LOADING = "LOADING",
}

interface GetDataAction {
    type: WeatherActionTypes.GET_DATA,
    payload: object
}

interface BringLocationError {
    type: WeatherActionTypes.BRING_LOCATION_ERROR,
    payload: boolean
}

interface Loading {
    type: WeatherActionTypes.LOADING,
    payload: boolean
}

export type WeatherAction =
    GetDataAction
    | BringLocationError
    | Loading