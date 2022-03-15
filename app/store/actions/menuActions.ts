import { MenuAction, MenuActionTypes } from "../../types/menuTypes";


export const tempConversion = (): MenuAction => ({
    type: MenuActionTypes.TEMP_CONVERSION
});

export const textInputAction = (e: string): MenuAction => ({
    type: MenuActionTypes.TEXT_INPUT,
    payload: e
});

export const inputOnFocus = (): MenuAction => ({
    type: MenuActionTypes.INPUT_ON_FOCUS
});

export const selectingCity = (): MenuAction => ({
    type: MenuActionTypes.SELECTING_CITY
});

export const loading = ():MenuAction => ({
    type: MenuActionTypes.LOADING
})

export const locate = (city: string):MenuAction => ({
    type: MenuActionTypes.LOCATE,
    payload: city
})