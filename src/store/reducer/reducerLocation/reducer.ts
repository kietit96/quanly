import { ActionTypes } from "./actionType"

export type TitemLocation = {
    name: string,
    id: number,
    position: number,
    count_item: number,
}
export type TactionType = {
    type: string,
    payload: any,
}

export const initialLocation: TitemLocation = {
    name: 'tất cả',
    id: -1,
    position: -1,
    count_item: 1,
}
const reducerLocation = (state = initialLocation, action: TactionType): TitemLocation => {
    switch (action.type) {
        case ActionTypes.SET_LOCATION:
            return {
                ...state,
                name: action.payload.name,
                id: action.payload.id,
                position: action.payload.position,
            }
        default:
            throw new Error('Invalid action type');
    }
}

export default reducerLocation;