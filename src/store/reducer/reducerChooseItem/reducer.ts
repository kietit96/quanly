import { ActionTypes } from "./actionType"

export type TactionType = {
    type: string
    payload: any
}
export type TchooseItem = {
    choosen_item: {
        id: number,
        time: number,
        rgb: string
    }
}
export const initialChooseItem: TchooseItem = {
    choosen_item: {
        id: -1,
        time: -1,
        rgb: ""
    },
}
const reducerChosenItem = (state: TchooseItem = initialChooseItem, action: TactionType) => {
    switch (action.type) {
        case ActionTypes.SET_ACTIVE:
            return {
                ...state,
                choosen_item: action.payload as TchooseItem["choosen_item"]
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export default reducerChosenItem