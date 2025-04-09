import reducerLocation, { initialLocation } from "@/store/reducer/reducerLocation/reducer";
import { Tchildren } from "@/types";
import { useReducer } from "react";
import ContextLocation from "./context";

export default function ThemeContext(props: Tchildren) {
    const { children } = props
    const [state, dispatch] = useReducer(reducerLocation, initialLocation)
    return (
        <ContextLocation.Provider value={[state, dispatch]}>
            {children}
        </ContextLocation.Provider>
    )
}