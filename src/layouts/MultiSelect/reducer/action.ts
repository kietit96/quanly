import { ActionTypes } from "./actionType"

export const setSearchText = (payload: string) => {
    return {
        type: ActionTypes.SET_SEARCHED_LIST,
        payload
    }
}

export const searchList = (payload: { [key: string]: unknown }) => {
    return {
        type: ActionTypes.SET_SEARCHED_LIST,
        payload
    }
}
type Titem = {
    name: string,
    value: any
}
export const setSearchedList = (payload: Titem[]) => {
    return {
        type: ActionTypes.SET_INIT_SEARCHED_LIST,
        payload
    }
}

export const setTempSelectedItems = (payload: string) => {
    return {
        type: ActionTypes.SET_TEMP_SELECTED_ITEMS,
        payload
    }
}
export const setSelectedItems = (payload: { items: Titem[], states: string[] }) => {
    return {
        type: ActionTypes.SET_SELECTED_ITEMS,
        payload
    }
}