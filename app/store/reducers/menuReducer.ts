import { MenuAction, MenuActionTypes, MenuState } from "../../types/menuTypes"
import { usedTextsMenu } from "../../usedTexts/usedTextsMenu";


const initialState: MenuState = {
    isCelsius: true,
    cityInputText: usedTextsMenu.establishedCity,
    isInputFocus: false,
    selectedCity: usedTextsMenu.establishedCity,
    // isLoading: true
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
                isCelsius: !state.isCelsius
            }

        case MenuActionTypes.TEXT_INPUT:

            return {
                ...state,
                cityInputText: action.payload
            }

        case MenuActionTypes.SELECTING_CITY:
            if (state.cityInputText === state.selectedCity) {
                return {
                    ...state,
                    isInputFocus: false
                }
            }
            else {
                let city: string;
                if (state.cityInputText !== state.selectedCity) {
                    city = state.cityInputText
                }
                else if (state.cityInputText === "") {
                    city = state.selectedCity
                }
                return {
                    ...state,
                    selectedCity: city,
                    isInputFocus: false
                }
            }

        // case MenuActionTypes.LOADING:
        //     console.log("action", action.payload)
        //     console.log("isLoadingaction", state.isLoading)
        //     return {
        //         ...state,
        //         isLoading: action.payload
        //     }

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