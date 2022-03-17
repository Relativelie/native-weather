import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";;
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";



// export const store = createStore(rootReducer, applyMiddleware(thunk))
export const store = configureStore({
    reducer: rootReducer, 
    middleware: [thunk]})
