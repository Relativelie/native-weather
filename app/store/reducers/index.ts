import {combineReducers} from "redux";
import { menuReducer } from "./menuReducer";
import { weatherReducer } from "./weatherReducer";


export const rootReducer = combineReducers({
    menu: menuReducer,
    weather: weatherReducer
})

export type RootState = ReturnType<typeof rootReducer>;