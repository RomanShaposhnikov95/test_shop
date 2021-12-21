import {configureStore} from "@reduxjs/toolkit";
import menuSlice from './MenuSlice'
import productSlice from './ProductSlice'
import sliderSlice from "./sliderSlice";



const store = configureStore({
    reducer: {
        menu: menuSlice,
        product: productSlice,
        slider: sliderSlice,
    }
})


window.store = store

export default store