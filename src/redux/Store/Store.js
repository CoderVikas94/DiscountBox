import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../UseReducer/Product"
export const store = configureStore({
    reducer:{
        product:productReducer,
        item:productReducer,
        category:productReducer,
    },
})