import { initialLocation, TactionType, TitemLocation } from "@/store/reducer/reducerLocation/reducer";
import { createContext, Dispatch } from "react";

const ContextLocation = createContext<[TitemLocation, Dispatch<TactionType>]>([initialLocation, () => null])

export default ContextLocation