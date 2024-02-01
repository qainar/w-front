import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "@/app/store/reducers";


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}