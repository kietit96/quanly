import { ActionTypes } from "./actionType"
import { TinputFormNV } from "./reducer"

export const setValuesEmployee = (payload: TinputFormNV) => {
    return {
        type: ActionTypes.SET_VALUETYPE,
        payload
    }
}

export const setResultEmployee = (payload: { real_max_day: number, show_luongung: number }) => {
    return {
        type: ActionTypes.SET_RESULT,
        payload
    }
}