import { Tdate } from "@/store/redux/ReduxDate/slice";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
type Tstate = {
    storeDate: Tdate
}
export default function useStateDate() {
    const state = useSelector((state: Tstate) => state.storeDate)
    const dispatch = useDispatch()
    return [state, dispatch] as [Tdate, Dispatch<UnknownAction>]
}