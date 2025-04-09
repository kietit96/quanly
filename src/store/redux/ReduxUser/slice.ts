import { createSlice } from "@reduxjs/toolkit";
import { checkUser, loginAsync } from "./createAsyncThunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Iuser {
    user: null | unknown
}

const initialState: Iuser = {
    user: null,
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            AsyncStorage.setItem("user", JSON.stringify(action.payload)); // Save user
            return {
                ...state,
                user: action.payload
            }
        })
        builder.addCase(checkUser.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        })
    }
})

export default slice.reducer
