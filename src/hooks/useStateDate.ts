import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
type Tstate = {
    storeDate: {
        date: number
    }
}
export default function useStateDate<T>() {
    const state = useSelector((state: Tstate) => state.storeDate.date)
    const dispatch = useDispatch()
    return [state, dispatch] as [T, Dispatch<UnknownAction>]
}