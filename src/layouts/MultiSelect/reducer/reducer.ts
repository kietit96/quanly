import { ActionTypes } from "./actionType";

type TactionType = {
    type: ActionTypes,
    payload: any
}
type TItem = {
    name: string,
    value: any,
}
type TinitListMulti = {
    stateSearchText: string,
    stateTempSelectedItems: string[],
    stateSelectedItemsConfirm: TItem[],
    stateListSearched: TItem[]
}

export const initListMulti: TinitListMulti = {
    stateSearchText: '',
    stateTempSelectedItems: [],
    stateSelectedItemsConfirm: [],
    stateListSearched: [],
}

const reducerMultiSelect = (state: TinitListMulti, action: TactionType): TinitListMulti => {
    switch (action.type) {
        case ActionTypes.SET_SEARCH_TEXT:
            return {
                ...state,
                stateSearchText: action.payload.title,
            }
        case ActionTypes.SET_SEARCHED_LIST:
            return {
                ...state,
                stateListSearched: action.payload.items.filter((item: TItem) => item.name.includes(state.stateSearchText))
            }
        case ActionTypes.SET_INIT_SEARCHED_LIST:
            return {
                ...state,
                stateListSearched: action.payload
            }
        case ActionTypes.SET_TEMP_SELECTED_ITEMS:
            if (state.stateTempSelectedItems.includes(action.payload)) {
                return {
                    ...state,
                    stateTempSelectedItems: state.stateTempSelectedItems.filter((value: string) => value !== action.payload)
                }
            }
            return {
                ...state,
                stateTempSelectedItems: [...state.stateTempSelectedItems, action.payload]
            }
        case ActionTypes.SET_SELECTED_ITEMS: {
            const { items, states } = action.payload
            return {
                ...state,
                stateSelectedItemsConfirm: states.map((value: string) => items.find((item: TItem) => item.value === value))
            }
        }
        default:
            throw new Error('Invalid action type');
    }
}

export default reducerMultiSelect