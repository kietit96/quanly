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
    reducers: {
        logoutUser: (state) => {
            return {
                ...state,
                user: null
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            if (!action.payload) {
                return {
                    ...state,
                    user: null
                }
            }
            return {
                ...state,
                user: action.payload.user
            }
        })
        builder.addCase(checkUser.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            }
        })
    }
})
export const { logoutUser } = slice.actions
export default slice.reducer
