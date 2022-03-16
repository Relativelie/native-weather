import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { menuReducer } from "./reducers/menuReducer";
import { weatherReducer } from "./reducers/weatherReducer";
// import { applyMiddleware, createStore } from "redux";


export const storeT = createStore(rootReducer, applyMiddleware(thunk))

// export const storeT = configureStore({
//     reducer: {
//       menu: menuReducer,
//       weather: weatherReducer
//     }
//   })