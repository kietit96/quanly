import useStateUser from "@/hooks/useStateUser"
import { checkUser } from "@/store/redux/ReduxUser/createAsyncThunk"
import { Tchildren } from "@/types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { ActivityIndicator, View } from "react-native"

export default function GlobalStateUser(props: Tchildren) {
    const { children } = props
    const [user, dispatch] = useStateUser()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        const checkLogin = async () => {
            try {
                const storeUser = await AsyncStorage.getItem("user")
                if (user) {
                    if ((!storeUser || storeUser === '')) {
                        await AsyncStorage.setItem("user", JSON.stringify(user))
                    }
                } else {
                    if (storeUser && storeUser !== '') {
                        const parsedUser = JSON.parse(storeUser)
                        await dispatch(checkUser(parsedUser.id))
                    }
                }
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        checkLogin()
    }, [user])
    return isLoading ? <LoadingPage /> : children
}

function LoadingPage() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}