import { Dispatch } from "redux";
import { getLocation } from "../../requests/getLocation";
import { MenuAction, MenuActionTypes, MenuState } from "../../types/menuTypes"
import { loading } from "../actions/menuActions";


const initialState: MenuState = {
    isCelsius: true,
    cityInputText: "Омск",
    isInputFocus: false,
    selectedCity: "Омск",
    isLoading: false
}

export const menuReducer = (state = initialState, action: MenuAction): MenuState => {
    switch (action.type) {
        case MenuActionTypes.INPUT_ON_FOCUS:
            return {
                ...state,
                isInputFocus: action.payload
            }

        case MenuActionTypes.TEMP_CONVERSION:
            return {
                ...state,
                isCelsius: !initialState.isCelsius
            }

        case MenuActionTypes.TEXT_INPUT:
            return {
                ...state,
                cityInputText: action.payload
            }

        case MenuActionTypes.SELECTING_CITY:
            let city: string;
            if (initialState.cityInputText !== initialState.selectedCity) {
                city = initialState.cityInputText
            }
            else if (initialState.cityInputText === "") {
                city = initialState.selectedCity
            }
            return {
                ...state,
                selectedCity: city,
                isInputFocus: false
            }

        case MenuActionTypes.LOADING:
            return {
                ...state,
                isLoading: !initialState.isLoading
            }

        case MenuActionTypes.LOCATE:
            return {
                ...state,
                selectedCity: action.payload,
                cityInputText: action.payload
            }




        default:
            return state
    }

}