import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./ReduxDate/slice";
import userReducer from './ReduxUser/slice'
const store = configureStore({
    reducer: {
        storeDate: dateReducer,
        storeUser: userReducer
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch