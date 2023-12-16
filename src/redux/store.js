import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
import apislice from "./apislice";

const store=configureStore({
    reducer:{
        cart : cartslice,
        api : apislice,
    }
})

export default store