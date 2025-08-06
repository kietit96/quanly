import reducerChosenItem, { initialChooseItem, TactionType, TchooseItem } from "@/store/reducer/reducerChooseItem/reducer";
import { Tchildren } from "@/types";
import { Dispatch, useMemo, useReducer } from "react";
import ContextChooseItem from "./context";

export default function ThemeContext({ children }: Tchildren) {
    const [state, dispatch] = useReducer(reducerChosenItem, initialChooseItem)
    const value: [TchooseItem, Dispatch<TactionType>] = useMemo(() => ([state, dispatch]), [state])
    return (
        <ContextChooseItem.Provider value={value}>
            {children}
        </ContextChooseItem.Provider>
    )
}