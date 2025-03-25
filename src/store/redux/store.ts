import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./ReduxDate/slice";
const store = configureStore({
    reducer: {
        date: dateReducer
    }
})
export default store