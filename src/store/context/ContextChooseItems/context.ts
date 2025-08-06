import { TactionType, TchooseItem } from "@/store/reducer/reducerChooseItem/reducer";
import { createContext, Dispatch } from "react";

const ContextChooseItem = createContext<[TchooseItem, Dispatch<TactionType>]>([{ choosen_item: { id: -2, time: -2, rgb: "" } }, () => { }])
export default ContextChooseItem