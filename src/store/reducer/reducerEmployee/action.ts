import { ActionTypes } from "./actionType"
import { TinputFormNV } from "./reducer"

export const setValuesEmployee = (payload: TinputFormNV) => {
    return {
        type: ActionTypes.SET_VALUETYPE,
        payload
    }
}

export const setChuyencan = (payload: number) => {
    return {
        type: ActionTypes.SET_CHUYENCAN,
        payload
    }
}

export const setResultEmployee = (payload: { real_max_day: number, show_luongung: number }) => {
    return {
        type: ActionTypes.SET_RESULT,
        payload
    }
}

export const setChamcong = (payload: {date: string, chamcong: {time: number, color: string}}) => {
    return {
        type: ActionTypes.SET_CHAMCONG,
        payload
    }
}