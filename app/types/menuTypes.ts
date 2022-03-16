export interface MenuState {
    isCelsius: boolean;
    cityInputText: string;
    isInputFocus: boolean;
    selectedCity: string;
    isLoading: boolean
}

export enum MenuActionTypes {
    TEMP_CONVERSION = "TEMP_CONVERSION",
    TEXT_INPUT = "TEXT_INPUT",
    INPUT_ON_FOCUS = "INPUT_ON_FOCUS",
    SELECTING_CITY = "SELECTING_CITY",
    LOCATE = "LOCATE",
    LOADING = "LOADING"
}

interface TempConversionAction {
    type: MenuActionTypes.TEMP_CONVERSION
}

interface TextInputAction {
    type: MenuActionTypes.TEXT_INPUT,
    payload: string
}

interface InputOnFocusAction {
    type: MenuActionTypes.INPUT_ON_FOCUS,
    payload: boolean
}

interface SelectingCityAction {
    type: MenuActionTypes.SELECTING_CITY,
}

interface Locate {
    type: MenuActionTypes.LOCATE,
    payload: string
}

interface Loading {
    type: MenuActionTypes.LOADING,
    payload: boolean
}


export type MenuAction =
    TempConversionAction
    | TextInputAction
    | InputOnFocusAction
    | SelectingCityAction
    | Locate
    | Loading