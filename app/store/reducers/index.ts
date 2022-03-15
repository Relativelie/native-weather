import {combineReducers} from "redux";
import { menuReducer } from "./menuReducer";


export const rootReducer = combineReducers({
    menu: menuReducer,
})

export type RootState = ReturnType<typeof rootReducer>;