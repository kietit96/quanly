import useStateLocation from "@/hooks/useStateLocation"
import { changeLocationAction } from "@/store/reducer/reducerLocation/action"
import { TitemLocation } from "@/store/reducer/reducerLocation/reducer"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"

export default function GlobalLocation() {
    const [location, dispatch] = useStateLocation()
    useEffect(() => {
        const changeStorageLocation = async () => {
            const store = await AsyncStorage.getItem("location")
            if (store) {
                const storeLocation: TitemLocation = JSON.parse(store)
                dispatch(changeLocationAction(storeLocation))
                return
            }
        }
        changeStorageLocation()
    }, [])
    useEffect(() => {
        const saveLocation = async () => {
            try {
                await AsyncStorage.setItem("location", JSON.stringify(location))
            } catch (error) {
                console.error(error)
            }
        }
        saveLocation()
    }, [location])
    return null
}