import { useStateDate } from "@/hooks/useStateDate"
import { setDate } from "@/store/redux/ReduxDate/slice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function GlobalStateDate() {
    const stateDate = new Date(useStateDate())
    const dispatch = useDispatch()
    useEffect(() => {
        async function initializeDate() {
            try {
                const storedDate = await AsyncStorage.getItem("date");
                if (storedDate) {
                    const savedTimestamp = parseInt(storedDate, 10);
                    dispatch(setDate(savedTimestamp))
                } else {
                    // If not exists, save the current Redux date value to AsyncStorage.
                    await AsyncStorage.setItem("date", stateDate.getTime().toString());
                }
            } catch (error) {
                console.error("Error accessing AsyncStorage:", error);
            }
        }
        initializeDate()
    }, [])
    useEffect(() => {
        async function setAsyncStorageDate() {
            try {
                await AsyncStorage.setItem("date", stateDate.getTime().toString());
            } catch (error) {
                console.error("Error accessing AsyncStorage:", error);
            }
        }
        setAsyncStorageDate()
    }, [stateDate])
    return null
}