import { configureStore } from "@reduxjs/toolkit"
import postSlice from "./postSlice";


const store = configureStore({
    reducers:{
        postSlice,
        
    }
})

export default store;