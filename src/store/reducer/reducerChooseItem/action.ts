import { ActionTypes } from "./actionType"

export const changeChooseItem = (payload: { [key: string]: unknown }) => {
    return {
        type: ActionTypes.SET_ACTIVE,
        payload
    }
}