import { getInfoUser, LoginAuth } from "@/services/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Tuser = {
    username: string,
    password: string,
}

export const loginAsync = createAsyncThunk('login', async ({ username, password }: Tuser) => {
    const result = await LoginAuth(username, password)
    return result
})
export const checkUser = createAsyncThunk('checkUser', async (userId: number) => {
    const result = await getInfoUser(userId)
    return result
})
export const LogoutAsync = createAsyncThunk('logout', async () => { })