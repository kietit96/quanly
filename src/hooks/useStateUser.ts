import { AppDispatch } from "@/store/redux/store";
import { Dispatch, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

type Tstore = {
    storeUser: {
        user: unknown | null
    }
}

export default function useStateUser<T>() {
    const state = useSelector((state: Tstore) => state.storeUser.user)
    const dispatch = useDispatch()
    return [state, dispatch] as [T, AppDispatch]
}