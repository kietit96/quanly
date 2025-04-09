import { ActionTypes } from "./actionType"

export const changeLocationAction = (payload: { [key: string]: unknown }) => {
    return {
        type: ActionTypes.SET_LOCATION,
        payload
    }
}