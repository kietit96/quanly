import { useSelector } from "react-redux";

export default function useStateDate() {
    const state = useSelector((state: { date: { date: number } }) => state.date.date)
    return state
}