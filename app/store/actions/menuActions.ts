import { Keyboard } from "react-native";
import Menu from "../../components/Menu";
import { MenuAction, MenuActionTypes } from "../../types/menuTypes";


export const tempConversion = (): MenuAction => ({
    type: MenuActionTypes.TEMP_CONVERSION
});

export const textInputAction = (e: string): MenuAction => ({
    type: MenuActionTypes.TEXT_INPUT,
    payload: e
});

export const inputOnFocus = (value: boolean): MenuAction => ({
    type: MenuActionTypes.INPUT_ON_FOCUS,
    payload: value
});

export const selectingCity = (): MenuAction => ({
    type: MenuActionTypes.SELECTING_CITY
});

export const loading = (value: boolean):MenuAction => ({
    type: MenuActionTypes.LOADING,
    payload: value
})

export const locate = (city: string):MenuAction => ({
    type: MenuActionTypes.LOCATE,
    payload: city
})