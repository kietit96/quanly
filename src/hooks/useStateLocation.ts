import ContextLocation from "@/store/context/ContextLocation/context";
import { useContext } from "react";

export default function useStateLocation() {
    const location = useContext(ContextLocation)
    return location
}