import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./ReduxDate/slice";
const store = configureStore({
    reducer: {
        storeDate: dateReducer
    }
})
export default store