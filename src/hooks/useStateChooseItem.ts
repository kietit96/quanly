import ContextChooseItem from "@/store/context/ContextChooseItems/context";
import { useContext } from "react";

export function useStateChooseItem() {
    const chooseItem = useContext(ContextChooseItem)
    return chooseItem
}